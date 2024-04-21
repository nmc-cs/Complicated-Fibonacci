#exact copy of Docerfile.dev no change needed except CMD
FROM node:alpine

WORKDIR "/app"

COPY ./package.json ./

RUN npm install

COPY . .

#change from "dev" to "start"
CMD ["npm", "run", "start"]
