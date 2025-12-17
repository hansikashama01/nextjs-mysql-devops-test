# Node 18
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install -g ts-node typescript

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
