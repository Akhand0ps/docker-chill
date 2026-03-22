#Base Image
FROM node:22.22.1-alpine3.23

WORKDIR /home/app/

COPY package*.json .
RUN npm install

COPY index.js server.js
COPY Dockerfile Dockerfile

EXPOSE  8000

CMD [ "npm" ,"start"]


