FROM node:alpine

WORKDIR /app

COPY index.cjs ./

COPY ./src ./src

EXPOSE 3000

CMD [ "node", "./index.cjs" ]
