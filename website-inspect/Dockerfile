FROM node:18-alpine
WORKDIR /website-inspect
COPY ./dist .
RUN npm install
CMD [ "node","./index.js" ]
HEALTHCHECK --interval=1m --timeout=3s \
  CMD curl -f mysql|| exit 1
EXPOSE 3000