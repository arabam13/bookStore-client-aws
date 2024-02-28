FROM node:alpine3.18 as build

# Declare build time environment variables
ARG VITE_APP_API_URL

# Set default values for environment variables
ENV VITE_APP_API_URL=$VITE_APP_API_URL

# Build App
WORKDIR /app
COPY package.json .
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm run build

# Serve with Nginx
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/build .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]