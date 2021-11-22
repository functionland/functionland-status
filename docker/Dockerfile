FROM node:14.18.1-slim as builder

WORKDIR /status
COPY . .

RUN yarn

ENV REACT_APP_PROVIDER_SOCKET=

EXPOSE 8000

CMD ["bash", "-c", "yarn start"]
