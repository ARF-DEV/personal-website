FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ARG VITE_API_HOST
ENV VITE_API_HOST=$VITE_API_HOST

RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html