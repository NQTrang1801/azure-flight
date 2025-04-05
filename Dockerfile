FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

COPY .env.sample .env

EXPOSE 4040 3030 3032 3033

RUN npm install -g concurrently

CMD ["npm", "run", "start:all"]
