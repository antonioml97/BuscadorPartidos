# Indica la versión del contenedor
FROM node:14.14.0-alpine
LABEL version="1.2.5" maintainer="Antonio Martin"

# Copia el archivo de dependencias
COPY package*.json ./

# Instala las dependencias 
RUN npm install && npm install -g gulp  && adduser -D usuarioIV

# Usuario
USER usuarioIV


# Indica el directorio donde se montará todo
VOLUME /test
WORKDIR /test

# Ejecuto gulp para ejecutar los test's
CMD ["gulp","test"] 