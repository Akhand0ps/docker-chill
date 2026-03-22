```
#Base Image
FROM node:22.22.1-alpine3.23


COPY index.js /home/app/server.js
COPY package-lock.json /home/app/package-lock.json
COPY package.json /home/app/package.json


WORKDIR /home/app/

RUN npm install


CMD [ "npm" ,"start"]

```