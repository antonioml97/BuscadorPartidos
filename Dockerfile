# Indica la versión del contenedor
FROM node:14.14.0-alpine
LABEL version="1.2.5" maintainer="Antonio Martin"

# Copia el archivo de dependencias
COPY package*.json ./
# Copio los archivos necesarios
COPY gulpfile.js ./

# Directorio al que le vamos a dar permisos
RUN mkdir /node_modules 

# Damos permisos
RUN chown node /node_modules && chown node /usr/local/lib/node_modules && chown node /usr/local/bin 

# A partir de aqui todo se ejecutara sin permisos de super usuario
USER node

# Instala las dependencias 
RUN npm install && npm install -g gulp 

# Indica el directorio donde se montará todo
WORKDIR /test

RUN chown node /test

# Ejecuto gulp para ejecutar los test's
CMD ["gulp","test"]