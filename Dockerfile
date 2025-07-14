FROM node:24.4.0-alpine AS builder

WORKDIR /app
COPY . .
RUN npm ci && \
    npm run build

FROM caddy:2.10-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=builder /app/dist/oled_burn_in_checkr/* /srv

EXPOSE 4200