FROM ubuntu:22.04
WORKDIR .
RUN apt update
RUN apt install -y nginx
COPY assets/ assets/
COPY index.html index.html
COPY about.html about.html
COPY styles.css styles.css
COPY deploy-nginx.conf /etc/nginx/nginx.conf
EXPOSE 5050

CMD ["nginx", "-g", "daemon off;"]







