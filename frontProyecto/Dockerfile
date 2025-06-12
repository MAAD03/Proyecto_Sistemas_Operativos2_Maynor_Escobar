# Etapa de build
FROM node:18-alpine as build
WORKDIR /app
COPY . .
RUN npm install && npm run build --prod

# Etapa de servidor Nginx
FROM nginx:alpine
COPY --from=build /app/dist/front-proyecto /usr/share/nginx/html  
COPY nginx.conf /etc/nginx/nginx.conf