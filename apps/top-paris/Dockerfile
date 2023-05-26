FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN npm i -g nx
COPY ./ .
RUN npm run build:front

FROM nginx:1.18.0-alpine
COPY --from=build-stage /app/dist/apps/top-paris/ /var/www/
COPY apps/top-paris/nginx.conf /etc/nginx/nginx.conf
WORKDIR /var/www
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]