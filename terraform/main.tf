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
