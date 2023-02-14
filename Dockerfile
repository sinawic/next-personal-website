FROM nginx:1.18.0

COPY out /var/www/front/

COPY nginx.conf /etc/nginx/conf.d/default.conf
