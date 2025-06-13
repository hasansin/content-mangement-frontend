# Step 1: Build React app
FROM node:18-slim as builder
WORKDIR /app
COPY . .
RUN apt-get update && apt-get upgrade -y && rm -rf /var/lib/apt/lists/*
RUN npm install
RUN npm run build

# Step 2: Serve with nginx
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Optional: Custom nginx config (if needed)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

