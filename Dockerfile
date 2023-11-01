# Use an official Node.js runtime as the base image
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /web-app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install web-app dependencies
RUN npm install

# Copy the entire Angular web-app source code to the container
COPY . .

# Build the Angular web-app
RUN ng build --configuration=production

# Use NGINX as the web server to serve the Angular web-app
FROM nginx:alpine

# Copy the built Angular web-app to the NGINX web root
COPY --from=build /web-app/dist /usr/share/nginx/html
