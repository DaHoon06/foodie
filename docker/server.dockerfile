FROM node:18-alpine3.17

RUN mkdir -p /app
WORKDIR /app

COPY ../server .

RUN npm ci

RUN npm run build

ENV NODE_EMV production

EXPOSE 4800
CMD ["npm", "run", "start:prod"]
