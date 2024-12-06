FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env .env

ENV NODE_ENV=production

EXPOSE 3000 5000

RUN npm install -g concurrently

CMD ["npm", "run", "start:all"]
