# Build Stage with NODE image
FROM node:latest as build-stage
# Set working directory to app
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install dependencies for React App
RUN npm install
# Copy the rest of the application files to the working directory ignoring files from dockerignore
COPY . .
# Build the React application
RUN npm run build

# Production Stage with NGINX image
FROM nginx:latest
# Copy the NGINX configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Change working directory to NGINX default directory 
WORKDIR /usr/share/nginx/html
# Removing default files from current directory
RUN rm -rf ./*
# Copy build folder to current directory
COPY --from=build-stage /app/dist .
# Expose port 80 for the NGINX server
EXPOSE 80
# Command to start NGINX when the container is run
CMD ["nginx", "-g", "daemon off;"]