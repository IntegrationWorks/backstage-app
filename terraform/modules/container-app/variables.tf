
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
  default     = 80
}