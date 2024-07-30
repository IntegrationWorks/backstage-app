

resource "azurerm_container_app" "this" {
  name                         = "${var.resource_prefix}-${var.aca_name}"

  resource_group_name          = var.resource_group_name
  container_app_environment_id = var.aca_env_id
  revision_mode                = "Single"

  template {
    container {
      name   = var.container_name
      image  = var.container_image_name
      cpu    = 0.25
      memory = "0.5Gi"
    }


  }
  ingress {
    target_port                = var.target_port
    allow_insecure_connections = false
    external_enabled           = false

    traffic_weight {
      percentage = 100
    }
  }
}