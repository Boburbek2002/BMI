FROM node:17-alpine
WORKDIR /app
COPY package.json .
RUN npm build
COPY . .
EXPOSE 3003
CMD ["npm", "start"]
