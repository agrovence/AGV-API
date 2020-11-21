# Base image:
FROM nginx

# Install dependencies
RUN apt-get update -qq && apt-get -y install apache2-utils

# create log directory
RUN mkdir log

# Copy Nginx config template
COPY ./apps/nginx/nginx.conf /tmp/docker.nginx

# substitute variable references in the Nginx config template for real values from the environment
# put the final config in its place
ENV SSL_ROOT /var/www/ssl

EXPOSE 80

# Use the "exec" form of CMD so Nginx shuts down gracefully on SIGTERM (i.e. `docker stop`)
CMD [ "nginx", "-g", "daemon off;" ]
