variable "location" {
  description = "Default Azure region"
  default     = "australiaeast"
}


variable "resource_group_name" {
  description = "Name of the resource group"
}

variable "resource_prefix" {
  description = "Resource naming prefix"

}

variable "private_dns_zone_name" {
  description = "Private domain name for postgres database."
}

variable "virtual_network_name" {
  description = "Name of the virtual network resource"
}

variable "psql_subnet_name" {
  description = "name of the postgres db subnet"
}

variable "aca_env_subnet_name" {
  description = "Name of the container apps environment "
}

variable "nginx_aca_name" {
  description = "Name of the Ngnix reverse proxy Azure container app"
}

variable "nginx_container_name" {
  description = "Name of the Ngnix reverse proxy container"
}

variable "nginx_container_image_name" {
  description = "Name of the Ngnix reverse proxy container image includes acr repo name"
}

variable "backstage_aca_name" {
  description = "Name of the Backstage Azure container app"
}

variable "backstage_container_name" {
  description = "Name of the Backstage container"
}

variable "backstage_container_image_name" {
  description = "Name of the Backstage container image includes acr repo name"
}

