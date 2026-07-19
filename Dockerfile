FROM node:24-alpine AS builder
WORKDIR /app

COPY frontend/.next ./.next
COPY frontend/public ./public
COPY frontend/node_modules ./node_modules
COPY frontend/package.json ./package.json

FROM node:24-alpine AS production
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["node", "node_modules/.bin/next", "start"]