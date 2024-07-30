


data "azurerm_resource_group" "this" {
  name     = var.resource_group_name
}

data "azurerm_container_registry" "acr" {
  name                = "iwaccelerator"
  resource_group_name = "james-sandbox"
}
resource "azurerm_private_dns_zone" "this" {
  depends_on = [ azurerm_resource_group.this ]
  name                = var.private_dns_zone_name
  resource_group_name = var.resource_group_name
}




resource "azurerm_user_assigned_identity" "this" {
  location            = data.azurerm_resource_group.this.location
  name                = "containerappmi"
  resource_group_name = data.azurerm_resource_group.this.name
}

resource "azurerm_role_assignment" "containerapp" {
  scope                = data.azurerm_container_registry.acr.id
  role_definition_name = "acrpull"
  principal_id         = azurerm_user_assigned_identity.this.principal_id
  depends_on = [
    azurerm_user_assigned_identity.this
  ]
}


resource "azurerm_postgresql_flexible_server" "this" {
  name                = "${var.resource_prefix}-psql"
  location            = azurerm_resource_group.this.location
  resource_group_name = var.resource_group_name

  version                       = "16"
  delegated_subnet_id           = azurerm_subnet.psql.id
  private_dns_zone_id           = azurerm_private_dns_zone.this.id
  public_network_access_enabled = false
  administrator_login           = var.psql_username
  administrator_password        = var.psql_password

  storage_mb   = 32768
  storage_tier = "P4"
  sku_name     = "B_Standard_B1ms"
  depends_on   = [azurerm_private_dns_zone.this, azurerm_subnet.psql]
}

resource "azurerm_virtual_network" "this" {
  depends_on = [ azurerm_resource_group.this ]
  name                = "${var.resource_prefix}-vnet"
  location            = azurerm_resource_group.this.location
  resource_group_name = var.resource_group_name
  address_space       = ["10.0.0.0/16"]

  
}

resource "azurerm_subnet" "psql" {
  depends_on = [ azurerm_virtual_network.this ]
  name                 = var.psql_subnet_name
  resource_group_name  = azurerm_resource_group.this.name
  virtual_network_name = azurerm_virtual_network.this.name
  address_prefixes     = ["10.0.0.0/24"]

}

resource "azurerm_subnet" "aca-env" {
  depends_on = [ azurerm_virtual_network.this ]
  name                 = var.aca_env_subnet_name
  resource_group_name  = azurerm_resource_group.this.name
  virtual_network_name = azurerm_virtual_network.this.name
  address_prefixes     = ["10.0.2.0/23"]
}

resource "azurerm_log_analytics_workspace" "this" {
  depends_on = [ azurerm_resource_group.this ]
  name                = "${var.resource_prefix}-logs"
  location            = azurerm_resource_group.this.location
  resource_group_name = azurerm_resource_group.this.name
  sku                 = "PerGB2018"
  retention_in_days   = 30
}

resource "azurerm_container_app_environment" "this" {
  depends_on = [ azurerm_subnet.aca-env ]
  name                       = "${var.resource_prefix}-aca-env"
  location                   = azurerm_resource_group.this.location
  resource_group_name        = azurerm_resource_group.this.name
  log_analytics_workspace_id = azurerm_log_analytics_workspace.this.id
  infrastructure_subnet_id   = azurerm_subnet.aca-env.id
}

module "nginx" {

  source = "./modules/container-app"

  resource_group_name  = azurerm_resource_group.this.name
  aca_name             = var.nginx_aca_name
  container_name       = var.nginx_container_name
  container_image_name = var.nginx_container_image_name
  aca_env_id           = azurerm_container_app_environment.this.id
  resource_prefix      = var.resource_prefix
  target_port          = 80
  external_enabled     = true

  depends_on = [ azurerm_container_app_environment.this ]

  identity_id =azurerm_user_assigned_identity.this.id
  acr_server = data.azurerm_container_registry.acr.login_server
}

module "backstage" {
  depends_on = [azurerm_postgresql_flexible_server.this, azurerm_container_app_environment.this]
  source     = "./modules/container-app"

  resource_group_name  = azurerm_resource_group.this.name
  aca_name             = var.backstage_aca_name
  container_name       = var.backstage_container_name
  container_image_name = var.backstage_container_image_name
  aca_env_id           = azurerm_container_app_environment.this.id
  resource_prefix      = var.resource_prefix
  target_port          = 7007
  external_enabled     = false
  identity_id =azurerm_user_assigned_identity.this.id
  acr_server = data.azurerm_container_registry.acr.login_server
}