
Custom Images

```
You need create Dockerfile -> it is just the configuration file which tells to how to create this project image



```
FROM ubuntu

COPY index.js server.js 
      1        2
 1: Actual name of the file on machine
 2: Copy the server.js in Ubuntu with same name

docker build -t node-app . 
"." -> tells that we are in the root the directory



```

```