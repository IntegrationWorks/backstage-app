FROM nginx
ARG HOSTNAME
COPY nginx.conf /etc/nginx/templates/default.conf.template

ENV HOSTNAME=${HOSTNAME}