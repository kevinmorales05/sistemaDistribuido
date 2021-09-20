FROM node:alpine
WORKDIR '/compras3'
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3002
CMD ["npm", "start"]
