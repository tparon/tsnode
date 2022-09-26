FROM node:18-alpine

USER 1000:1000

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci
RUN apk add curl

COPY . .

EXPOSE 3000

CMD ["npm", "start"]