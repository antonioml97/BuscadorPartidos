# Indica la versión del contenedor
FROM node:14.14.0-alpine AS base
LABEL version="1.2.5" maintainer="Antonio Martin"

#Creación de grupo y usuario node. Instalación de node y npm
RUN  mkdir /node_modules && chown node:node /node_modules

# Cambio a un usuario no privilegiado
USER node

FROM base AS dependencies
# Diectorio para las depencias
WORKDIR /

# Copia el archivo de dependencias
COPY package*.json ./
# Copio los archivos necesarios
COPY gulpfile.js ./

# Instala las dependencias 
RUN npm install --silent --progress=false --no-optional 

FROM base AS test
#Pasamos los datos a /node_modules
COPY --from=dependencies /node_modules /node_modules

#Creación del volumen
WORKDIR /test
RUN npm install -g gulp

#PATH del node_modules
ENV PATH=/node_modules/.bin:$PATH

# Ejecuto gulp para ejecutar los test's
CMD ["gulp","test"]