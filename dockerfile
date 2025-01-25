FROM node:23-alpine
WORKDIR /app
COPY package*.json ./
RUN npm  install
COPY . .
CMD ["npm","run", "dev"]
# docker run -p 5173:5173 docker-name