FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY . .
COPY --from=base /app/ ./
COPY --from=base /app/.next ./.next
COPY --from=base /app/package*.json ./
COPY --from=base /app/.next ./.next
COPY --from=base /app/node_modules ./node_modules
CMD ["npm", "start"]