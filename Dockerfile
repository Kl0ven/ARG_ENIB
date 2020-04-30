# Pull base image.
FROM ubuntu:18.04

# Install Node.js
RUN apt-get update && apt-get install -y curl && apt-get -y install sudo && rm -rf /var/lib/apt/lists/*

RUN curl --silent --location https://deb.nodesource.com/setup_13.x | sudo bash -
RUN apt-get install --yes nodejs
RUN apt-get install --yes build-essential
RUN npm install -g grunt-cli

WORKDIR /app
ADD package.json .

# Install app dependencies
RUN npm install

ADD . .

ENV PATH node_modules/.bin:${PATH}
