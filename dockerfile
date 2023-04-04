### STAGE 1: Build ###
FROM node:current-alpine3.16 AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm i -g @angular/cli

# Install app dependencies:
RUN npm i

COPY . .
RUN npm run build

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY --from=build /usr/src/app/default.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80
