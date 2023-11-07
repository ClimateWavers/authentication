FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 8000
RUN chmod -R a+rwx /usr/src/app
RUN mkdir ~/.npm && chmod -R a+rwx ~/.npm
USER node
CMD ["npm", "start"]
