
variable "resource_group_name" {
  description = "Resource group name"
}

variable "resource_prefix" {
  description = "Resource naming prefix"
}

variable "aca_name" {
  description = "Azure container app resource name"

}
variable "aca_env_id" {
  description = "ID of the Azure container app managed environmet"

}

variable "container_name" {
  description = "name of the container"
}

variable "container_image_name" {
  description = "Name of the container image stored in ACR"
}

variable "target_port" {
  description = "Target port of the container"
}

variable "external_enabled" {
  description = "Are connections to this Ingress from outside the Container App Environment enabled?"

}

variable "identity_id" {
  description = "Managed identity id for pulling images from ACR"
}

variable "acr_server" {
  description = "Login server for azure container apps."
}