FROM node:20-alpine AS builder

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:20-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci --omit=dev --ignore-scripts

COPY --from=builder /usr/app/.next ./.next
COPY --from=builder /usr/app/next.config.mjs ./

ENV NEXT_SHARP_PATH=./node_modules/sharp

EXPOSE 3000

CMD ["npm", "start"]