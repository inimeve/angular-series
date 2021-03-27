
### Build app ###
FROM node:14.16.0-alpine3.12 as build-app
RUN mkdir -p /app
WORKDIR /app
# Install dependencies
COPY package.json /app
RUN npm install
# Build app
# COPY . /app
COPY /src /app/src
COPY angular.json /app
COPY package.json /app
COPY tsconfig.json /app
COPY tsconfig.app.json /app
RUN npm run build

### Create image ###
FROM nginx:1.19.7-alpine as build-image
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-app /app/dist/ng-zorro-spa /usr/share/nginx/html