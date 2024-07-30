terraform {
  backend "azurerm" {
    resource_group_name  = "backstage-terraform"
    storage_account_name = "iwterraformstate"
    container_name       = "tf-state"
  }
}