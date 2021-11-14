FROM node:13-alpine
ENV port=9000
RUN mkdir -p /home/app
COPY . /home/app
CMD ["node","/home/app/index.js"]