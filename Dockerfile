FROM node:20-alpine

WORKDIR /usr/app

COPY ./.next ./.next
COPY package.json .
COPY package-lock.json .
COPY ./next* .

RUN npm ci --omit=dev --ignore-scripts

ENV NEXT_SHARP_PATH=./node_modules/sharp

EXPOSE 3000

CMD ["npm", "start"]