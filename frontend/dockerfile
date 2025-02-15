FROM node:23-alpine
WORKDIR /app
COPY package*.json ./
RUN npm  install
COPY . .
EXPOSE 5173
CMD ["npm","run", "dev"]

# -p = port
# first parameter : HOST port
# second parameter : CONTAINER port
# docker run -p 5173:5173 docker-name

# -v = volume
#$(pwd) = current directory
# first parameter : HOST path
# second parameter : CONTAINER path
#also add volume for the node_module because "$(pwd):/app" it copy from the directory to the /app but the node_module is not
#docker run -p 5173:5173 -v "$(pwd):/app" -v /app/node_modules  img1  