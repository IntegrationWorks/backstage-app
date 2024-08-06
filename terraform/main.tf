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