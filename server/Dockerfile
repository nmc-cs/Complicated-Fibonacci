#only change from dev file is CMD "dev" to "start"
FROM node:14.4.0-alpine

WORKDIR "/app"

COPY ./package.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]
