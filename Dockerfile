FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
EXPOSE 80
CMD [ "npm", "run", "start" ]