# This dockerfile builds an image for the backend package.
# It should be executed with the root of the repo as docker context.
#
# Before building this image, be sure to have run the following commands in the repo root:
#
# yarn install
# yarn tsc
# yarn build:backend
#
# Once the commands have been run, you can build the image using `yarn build-image`

FROM node:18-bookworm-slim

# Install isolate-vm dependencies, these are needed by the @backstage/plugin-scaffolder-backend.
RUN --mount=type=cache,target=/var/cache/apt,sharing=locked \
    --mount=type=cache,target=/var/lib/apt,sharing=locked \
    apt-get update && \
    apt-get install -y --no-install-recommends python3 g++ build-essential && \
    yarn config set python /usr/bin/python3

# Install sqlite3 dependencies. You can skip this if you don't use sqlite3 in the image,
# in which case you should also move better-sqlite3 to "devDependencies" in package.json.
# RUN --mount=type=cache,target=/var/cache/apt,sharing=locked \
#     --mount=type=cache,target=/var/lib/apt,sharing=locked \
#     apt-get update && \
#     apt-get install -y --no-install-recommends libsqlite3-dev

RUN apt-get update && apt-get install -y python3-pip python3-venv

ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

RUN pip3 install mkdocs-techdocs-core

# From here on we use the least-privileged `node` user to run the backend.
USER node

# This should create the app dir as `node`.
# If it is instead created as `root` then the `tar` command below will fail: `can't create directory 'packages/': Permission denied`.
# If this occurs, then ensure BuildKit is enabled (`DOCKER_BUILDKIT=1`) so the app dir is correctly created as `node`.
WORKDIR /app

# This switches many Node.js dependencies to production mode.
ENV NODE_ENV=production

RUN --mount=type=secret,id=base_url,env=BASE_URL \
    --mount=type=secret,id=azure_tenant_id,env=AZURE_TENANT_ID \
    --mount=type=secret,id=azure_client_id,env=AZURE_CLIENT_ID \
    --mount=type=secret,id=azure_client_secret,env=AZURE_CLIENT_SECRET \
    --mount=type=secret,id=postgres_host,env=POSTGRES_HOST \
    --mount=type=secret,id=postgres_user,env=POSTGRES_USER \
    --mount=type=secret,id=postgres_port,env=POSTGRES_PORT \
    --mount=type=secret,id=postgres_password,env=POSTGRES_PASSWORD \
    sh -c ' \
    BASE_URL=${BASE_URL} && \
    AZURE_TENANT_ID=${AZURE_TENANT_ID} && \
    AZURE_CLIENT_ID=${AZURE_CLIENT_ID} && \
    AZURE_CLIENT_SECRET=${AZURE_CLIENT_SECRET} && \
    POSTGRES_HOST=${POSTGRES_HOST} && \
    POSTGRES_USER=${POSTGRES_USER} && \
    POSTGRES_PORT=${POSTGRES_PORT} && \
    POSTGRES_PASSWORD=${POSTGRES_PASSWORD} && \
    { echo "BASE_URL=$BASE_URL"; \
    echo "AZURE_TENANT_ID=$AZURE_TENANT_ID"; \
    echo "AZURE_CLIENT_ID=$AZURE_CLIENT_ID"; \
    echo "AZURE_CLIENT_SECRET=$AZURE_CLIENT_SECRET"; \
    echo "POSTGRES_HOST=$POSTGRES_HOST"; \
    echo "POSTGRES_USER=$POSTGRES_USER"; \
    echo "POSTGRES_PORT=$POSTGRES_PORT"; \
    echo "POSTGRES_PASSWORD=$POSTGRES_PASSWORD"; \
    } > /app/env_vars.sh && \
    chmod +x /app/env_vars.sh'


# Copy repo skeleton first, to avoid unnecessary docker cache invalidation.
# The skeleton contains the package.json of each package in the monorepo,
# and along with yarn.lock and the root package.json, that's enough to run yarn install.
COPY --chown=node:node yarn.lock package.json packages/backend/dist/skeleton.tar.gz ./
RUN tar xzf skeleton.tar.gz && rm skeleton.tar.gz

RUN --mount=type=cache,target=/home/node/.cache/yarn,sharing=locked,uid=1000,gid=1000 \
    yarn install --frozen-lockfile --production --network-timeout 300000

# Then copy the rest of the backend bundle, along with any other files we might want.
COPY --chown=node:node packages/backend/dist/bundle.tar.gz app-config*.yaml github-credentials.yaml ./
RUN tar xzf bundle.tar.gz && rm bundle.tar.gz



CMD ["/bin/sh", "-c", "source /app/env_vars.sh && node packages/backend --config app-config.yaml --config app-config.production.yaml"]