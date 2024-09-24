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

variable "dns_zone_name" {
  description = "Name of an existing DNS zone"
}

variable "txt_record_name" {
  description = "Name of the existing txt record "
}

variable "cname_record_name" {
  description = "Name of the existing CName record for for the Nginx application"

}

variable "dns_resource_group_name" {
  description = "Name of the resource group which contains the DNS Zone"
}

variable "azure_tenant_id" {
  description = "Azure tenant ID"
  sensitive   = true

}

variable "azure_auth_client_id" {
  description = "Azure client ID for backstage authentication"
  sensitive   = true
}

variable "azure_auth_client_secret" {
  description = "Azure client secret for backstage authentication"
  sensitive   = true
}
variable "postgres_host" {
  description = "Postgres DB hostname"
  sensitive   = true
}

variable "postgres_user" {
  description = "Postgres DB admin username"
  sensitive   = true
}
variable "postgres_password" {
  description = "Postgres DB admin password"
  sensitive   = true
}

variable "postgres_port" {
  description = "Postgres DB port"
  sensitive   = true
  default     = 5432
}


