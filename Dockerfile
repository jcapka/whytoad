FROM nginx
COPY . /usr/share/nginx/html

COPY nginx_default.conf /etc/nginx/conf.d/default.conf

