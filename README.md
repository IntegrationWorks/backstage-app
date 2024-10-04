# Backstage App

This repo contains three main directories. The first directory, [/backstage](./backstage/), contains the application code and Dockerfile for the Backstage app. The second, [/nginx](./nginx/), contains the  Nginx configuration and Dockerfile. While [/terraform](./terraform/) contains the Terraform code for infrastructure in Azure.

Together, these directories hold all the application level code and infrastructure for Backstage deployment.

To build and deploy there are two Github Workflows defined in [/.github](./.github/workflows/).

## Backstage

For the full [Backstage Documentation](https://backstage.io/docs/overview/what-is-backstage/)

The [/backstage](./backstage/) directory contains all the code for the Backstage as well as a Dockerfile for containerisation.

Within this directory, the code is split into two parts, `frontend` and `backend`. The frontend remains untouched however, the backend has been modified to add plugins. For info on the architecture of the frontend, reference the [Backstage frontend docs](https://backstage.io/docs/frontend-system/). For info on the architecture and building of the backend, reference the [Backstage backend docs](https://backstage.io/docs/backend-system/).

## Nginx

The [/nginx](./nginx/) directory contains configuration for Nginx and a Dockerfile for containerisation.

## Terraform

The [/terraform](./terraform/) directory contains all the Terraform code for provisioning resources to azure.

The main resource definitions are in [main.tf](./terraform/main.tf). This file uses data sources to retrieve a resource group, container registry, user-assigned managed identity and container app environment.

These data sources are used in the configuration of two container apps which are defined in the modules `nginx` and `backstage`. These two modules draw on the same module defined in [/terraform/modules/container-app](./terraform/modules/container-app/) which defines an Azure container App. These use the images built and pushed to the Azure Container Registry in the build workflow.

## Build and Deploy

There are two workflows defined in the [/.github/workflows](./.github/workflows/) directory.

### Build

The build workflow defines steps to build Docker images for Nginx and Backstage. These images are then pushed to Azure container repository so they can be deployed to container apps.

### Deploy

The deploy workflow defines steps to either deploy or destroy Azure resources defined in [/terraform](#terraform).

The workflow first logs into Azure which is needed for Terraform to have permission to deploy resources.

Terraform is then setup on the runner. Then there are steps to initialise the terraform directory and validate the terraform files.

Then there are steps to perform `terraform plan` and `terraform apply` which will deploy the resources to Azure. If the destroy input is true, plan and apply do not run and instead `terraform destroy` is run which will remove the resources from Azure.

## Running Locally

### Prerequisites

- Recommend using a Unix based OS such as Linux or MacOS.
- [Node.js Active LTS Release](https://nodejs.org/en/about/previous-releases)
  - Recommend using nvm for this:
    - [Install nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script)
    - [Install Node with nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#usagem)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- [Docker](https://docs.docker.com/engine/install/)
- [PostgreSQL](https://www.postgresql.org/download/)
- Github credentials need to be acquired. Ask `James Knott` to share them with you.

### Configure Postgres User

Before the application can run, PostgreSQL needs to be setup.

1. Install PostgreSQL:
    - On Linux:

        ```bash
            sudo apt install postgresql
        ```

    - On Mac: [Download the latest release](https://postgresapp.com/).
2. Open PostgreSQL:
    - On linux:

        ```bash
            sudo -u postgres psql
        ```

    - On Mac:

        ```Zsh
            psql -U postgres
        ```

    - In your terminal you should see something like this:

        ```Zsh
        postgres=#
        ```

3. Modify the existing postgres user to password of your choosing. The configuration is setup to use a password of `postgres` locally:

    ```SQL
        postgres=# ALTER USER postgres PASSWORD 'postgres';
    ```

### Create Github Credentials file

Once you have the credentials, enter the backstage directory:

```bash
cd backstage-app/backstage
```

Once in this directory, create a file named `github-credentials.yaml` and copy the credentials into the file.

This file has been addedd to the `.gitignore` so it wont be commited to the remote repository.

### Start up Backstage

Now we are ready to start the application from the terminal using yarn. Make sure you are in a regular terminal and not in the PostgreSQL terminal.

Enter the cloned repository and the backstage directory, if you haven't already:

```bash
cd backstage-app/backstage
```

This directory contains all the application code for Backstage.

Start the application:

```bash
yarn dev
```

The application will begin to start up. As soon as it states:

```bash
[0] webpack compiled successfully
```

The application is ready to be explored at `localhost:3000`.
