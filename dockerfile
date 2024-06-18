FROM node:20-slim

WORKDIR /app

COPY . .

RUN npm install

RUN npm run backend-build

RUN npm run build

EXPOSE 3001
CMD ["npm", "run", "start"]

