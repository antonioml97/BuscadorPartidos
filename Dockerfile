# Indica la versión del contenedor
FROM node:14.14.0-alpine
LABEL version="1.2.5" maintainer="Antonio Martin"

# Copia el archivo de dependencias
COPY package*.json ./
# Copio los archivos necesarios
COPY gulpfile.js ./

# Instala las dependencias 
RUN npm install && npm install -g gulp && npm install gulp-mocha --save && adduser -D usuarioIV

# Usuario
USER usuarioIV


# Indica el directorio donde se montará todo
VOLUME /test
WORKDIR /test
RUN chown -R node ./test
# Ejecuto gulp para ejecutar los test's
CMD ["gulp","test"]