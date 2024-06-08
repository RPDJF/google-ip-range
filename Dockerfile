FROM node:20.14.0-alpine3.19

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD ["npm", "start"]

