FROM node:22-alpine AS builder

WORKDIR /usr/app

RUN npm install -g pnpm@9

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

FROM node:22-alpine

WORKDIR /usr/app

RUN npm install -g pnpm@9

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --prod --ignore-scripts

COPY --from=builder /usr/app/.next ./.next
COPY --from=builder /usr/app/next.config.mjs ./
COPY --from=builder /usr/app/mdx ./mdx

ENV NEXT_SHARP_PATH=./node_modules/sharp

EXPOSE 3000

CMD ["npm", "start"]