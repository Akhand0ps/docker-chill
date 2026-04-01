Run image as different user -- not root user.

To do this we need add some commands just before we write execute command


```

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system -uid 1001 nodejs


USER nodejs

CMD ["npm","start"]


```