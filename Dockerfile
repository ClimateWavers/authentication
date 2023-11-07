FROM node:18.17.1-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 8000
RUN chown -R node /usr/src/app
USER node
RUN chmod -R a+rwx /usr/src/app && export npm_config_cache=/usr/src/app/
CMD ["npm", "start"]
