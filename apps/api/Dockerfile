FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN npm i -g nx
COPY ./ .
RUN npm run build:api

FROM node:latest
RUN mkdir /app
COPY --from=build-stage /app/dist/apps/api/ /app
COPY --from=build-stage /app/node_modules /app/node_modules

WORKDIR /app
CMD ["node", "main"]
