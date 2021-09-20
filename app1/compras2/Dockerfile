FROM node:alpine
WORKDIR '/compras2'
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm", "start"]
