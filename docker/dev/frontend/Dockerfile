# Image
FROM node:14.16.1-alpine

# Set up work directory
WORKDIR /var/www/frontend

# Configure host
ENV HOST 0.0.0.0

RUN apk add --update python make g++\
   && rm -rf /var/cache/apk/*

# Init command
CMD ["sh", "-c", "npm install && npm run watch"]
