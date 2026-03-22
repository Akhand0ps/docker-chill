
IMAGE
```
Blueprint of an app
Contains: code+runtime dependices
Immutable: doesnt change after creation
Used to create multiple container

for example: a simple nodejs server, an Operating system etc


---TO BUILD---
docker build -t my-app


#list images
docker images

#remove images
docker rmi my-app
```


CONTAINER'S

```
It is the isolated environment which is made up using Image.
It is the actual running instance of an image
It can be modified
A single image can have multiple containers and each containers are isolated from each other.

--created by - docker run 


IMPORTANT

dockerfile -> Image -> Containers

```