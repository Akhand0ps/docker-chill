How to publish your own custom image on hubdocker?

there are 2 ways.
```
1: create one repo on https://hub.docker.com/repository
2: copy the repo name
3: build the image with repo name
4: login to the docker using "docker login" command
5: then run -> "docker push <repo name>"
6: done
7: Now, delete all the container made up using that image delete that image too.
8: Now, pull the image direclty from hub.docker and use it.


2nd way:

Via making tag internally
tag is used here for to using the local image name and map to repo name internally which will allow to push the local image with local name but it will map to the repo name automaticallly.
1: create repo
2: Run -> docker tag "local-image-name" <repo_name>
3: RUN -> docker push <repo-name>
4: done and dusted

```


VERSIONING

```

Used for lanching new versions of image

1: create repo
2: Run -> docker tag "local-image-name" <repo_name>:v1
3: RUN -> docker push <repo-name>
4: done and dusted


```