FROM node:14
WORKDIR '/apiExpressMYSQL'
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3050
CMD ["node", "."]
