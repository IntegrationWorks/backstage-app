variable "resource_group_name" {
  description = "Name of the resource group"
}

variable "resource_prefix" {
  description = "Resource naming prefix"

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

