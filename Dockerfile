FROM node:14-alpine

WORKDIR /node-app

# ------------------------------------------
# copy content
# ------------------------------------------
COPY . .

RUN yarn

ADD . /node-app
