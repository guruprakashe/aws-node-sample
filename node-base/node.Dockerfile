FROM node:16.16.0-alpine

#RUN apt-get install -y bzip2
#RUN apt-get update \
  #&& apt-get install -y bzip2
#COPY . /src
#WORKDIR /src/s3-trigger-lambda/s3-lambda-trigger

#RUN npm install

#RUN npm build

CMD tail -f /dev/null