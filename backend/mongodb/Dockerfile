FROM alpine:3.9

WORKDIR /app

RUN apk add --no-cache bash mongodb mongodb-tools

COPY script.sh /script.sh
COPY ./data ./data

RUN mkdir -p /data/db && \
    chown -R mongodb /data/db 

VOLUME /data/db
VOLUME /data/configdb

EXPOSE 27017

CMD [ "mongod", "--bind_ip", "0.0.0.0"]
