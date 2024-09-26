data "azurerm_resource_group" "this" {
  name = var.resource_group_name
}

data "azurerm_container_registry" "acr" {
  name                = "iwaccelerator"
  resource_group_name = "james-sandbox"
}


data "azurerm_user_assigned_identity" "this" {
  name                = "backstage-acr"
  resource_group_name = data.azurerm_resource_group.this.name
}


data "azurerm_container_app_environment" "this" {
  name                = "${var.resource_prefix}-aca-env"
  resource_group_name = data.azurerm_resource_group.this.name
}

module "nginx" {

  source = "./modules/container-app"

  resource_group_name  = data.azurerm_resource_group.this.name
  aca_name             = var.nginx_aca_name
  container_name       = var.nginx_container_name
  container_image_name = var.nginx_container_image_name
  aca_env_id           = data.azurerm_container_app_environment.this.id
  resource_prefix      = var.resource_prefix
  target_port          = 80
  external_enabled     = true

  depends_on = [data.azurerm_container_app_environment.this, data.azurerm_user_assigned_identity.this, data.azurerm_container_registry.acr]

  identity_id = data.azurerm_user_assigned_identity.this.id
  acr_server  = data.azurerm_container_registry.acr.login_server
  secrets     = []
  envs        = []
}

module "backstage" {
  depends_on = [data.azurerm_container_app_environment.this, data.azurerm_user_assigned_identity.this, data.azurerm_container_registry.acr]
  source     = "./modules/container-app"

  resource_group_name  = data.azurerm_resource_group.this.name
  aca_name             = var.backstage_aca_name
  container_name       = var.backstage_container_name
  container_image_name = var.backstage_container_image_name
  aca_env_id           = data.azurerm_container_app_environment.this.id
  resource_prefix      = var.resource_prefix
  target_port          = 7007
  external_enabled     = false
  identity_id          = data.azurerm_user_assigned_identity.this.id
  acr_server           = data.azurerm_container_registry.acr.login_server
  secrets = [
    { name = "base-url", value = "${azurerm_dns_cname_record.this.name}.${data.azurerm_dns_zone.this.name}" },
    { name = "azure-tenant-id", value = var.azure_tenant_id },
    { name = "azure-client-id", value = var.azure_auth_client_id },
    { name = "azure-client-secret", value = var.azure_auth_client_secret },
    { name = "postgres-host", value = var.postgres_host },
    { name = "postgres-user", value = var.postgres_user },
    { name = "postgres-port", value = var.postgres_port },
    { name = "postgres-password", value = var.postgres_password },
    { name = "postgres-ssl-mode", value = var.postgres_ssl_mode }
  ]

  envs = [
    { name = "BASE_URL", secret_name = "base-url" },
    { name = "AZURE_TENANT_ID", secret_name = "azure-tenant-id" },
    { name = "AZURE_CLIENT_ID", secret_name = "azure-client-id" },
    { name = "AZURE_CLIENT_SECRET", secret_name = "azure-client-secret" },
    { name = "POSTGRES_HOST", secret_name = "postgres-host" },
    { name = "POSTGRES_USER", secret_name = "postgres-user" },
    { name = "POSTGRES_PORT", secret_name = "postgres-port" },
    { name = "POSTGRES_PASSWORD", secret_name = "postgres-password" },
    { name = "PGSSLMODE", secret_name = "postgres-ssl-mode" }
  ]
}


data "azurerm_dns_zone" "this" {
  name = var.dns_zone_name
}


data "azurerm_dns_txt_record" "this" {
  name                = var.txt_record_name
  resource_group_name = var.dns_resource_group_name
  zone_name           = data.azurerm_dns_zone.this.name
}


resource "azurerm_dns_cname_record" "this" {
  name                = var.cname_record_name
  resource_group_name = var.dns_resource_group_name
  zone_name           = data.azurerm_dns_zone.this.name
  ttl                 = 300
  record              = module.nginx.fqdn
}

data "azapi_resource" "app_verification_id" {
  resource_id = data.azurerm_container_app_environment.this.id
  type        = "Microsoft.App/managedEnvironments@2024-03-01"

  response_export_values = ["properties.customDomainConfiguration.customDomainVerificationId"]
}

locals {
  verificationId = jsondecode(data.azapi_resource.app_verification_id.output).properties.customDomainConfiguration.customDomainVerificationId
}


resource "time_sleep" "dns_propagation" {
  create_duration = "60s"

  depends_on = [data.azurerm_dns_txt_record.this, azurerm_dns_cname_record.this]

  triggers = {
    url            = "${azurerm_dns_cname_record.this.name}.${data.azurerm_dns_zone.this.name}",
    verificationId = local.verificationId,
    record         = azurerm_dns_cname_record.this.record,
  }
}

resource "azapi_update_resource" "custom_domain" {
  type        = "Microsoft.App/containerApps@2024-03-01"
  resource_id = module.nginx.id

  body = jsonencode({
    properties = {
      ingress = {
        customDomains = [
          {
            bindingType = "Disabled",
            name        = time_sleep.dns_propagation.triggers["url"],
          }
        ]
      }
    }
  })
}
