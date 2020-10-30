# Indica la versión del contenedor
FROM node:14.14.0-alpine AS base
LABEL version="1.2.5" maintainer="Antonio Martin"

#Damos los permisos necesarios
RUN  mkdir /node_modules && chown -R node /node_modules && chown -R node /usr/local/lib/node_modules && chown -R node /usr/local/bin

# Cambio a un usuario no privilegiado
USER node

# Copia el archivo de dependencias
COPY package*.json ./
# Copio los archivos necesarios
COPY gulpfile.js ./

# Instala las dependencias 
RUN npm install && npm install -g gulp

VOLUME ["/test"]
WORKDIR /test

# Ejecuto gulp para ejecutar los test's
CMD ["gulp","test"]