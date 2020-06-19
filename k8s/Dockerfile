FROM harbor.qkagame.com/universalframework/officalfrontabc:latest
ENV HOST 0.0.0.0
COPY .nuxt /app/.nuxt
COPY static /app/static
COPY nuxt.config.js /app
COPY package.json /app
COPY package-lock.json /app
WORKDIR /app
EXPOSE 3000
CMD ["npm","run","start"]
