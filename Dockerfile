FROM node:14.18.1

WORKDIR /usr/src/app

COPY . /usr/src/app
RUN yarn && yarn build

EXPOSE 5000
CMD [ "yarn", "start" ]