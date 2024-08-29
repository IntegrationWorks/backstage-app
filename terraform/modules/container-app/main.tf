

resource "azurerm_container_app" "this" {
  name = "${var.resource_prefix}-${var.aca_name}"

  resource_group_name          = var.resource_group_name
  container_app_environment_id = var.aca_env_id
  revision_mode                = "Single"

  identity {
    type         = "UserAssigned"
    identity_ids = [var.identity_id]
  }

  registry {
    server   = var.acr_server
    identity = var.identity_id

  }

  template {
    container {
      name   = var.container_name
      image  = var.container_image_name
      cpu    = 0.25
      memory = "0.5Gi"
    }
    min_replicas = 1

  }


  ingress {
    target_port                = var.target_port
    allow_insecure_connections = false
    external_enabled           = var.external_enabled

    traffic_weight {
      percentage      = 100
      latest_revision = true
    }
  }
}
