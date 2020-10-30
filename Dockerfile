FROM node:14.14.0-alpine

RUN addgroup -S grupoIV && adduser -S antoniol97 -G grupoIV

#Copiamos ficheros de dependencias e instalamos las dependencias
COPY package*.json ./
RUN npm install

#Eliminamos el fichero de dependencias
RUN rm package*.json

#Instalamos gulp
RUN npm install -g gulp

#Cambiamos al usuario antoniol97 ya que no necesitamos permisos root para ejecutar los tests.
USER antoniol97

VOLUME /test
WORKDIR /test

CMD ["gulp","test"]