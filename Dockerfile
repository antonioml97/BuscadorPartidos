# Indica la versión del contenedor
FROM node:10-alpine
LABEL maintainer="Antonio Martin"

# Indica el directorio donde se montará todo
WORKDIR /Contenedor-BuscardorPartidos

# Copia el archivo de dependencias
COPY package*.json ./

# Copio los archivos necesarios
COPY src ./src
COPY datos ./datos
COPY test ./test
COPY gulpfile.js ./

# Instala las dependencias, el cliente de gulp, necesario para pasar los test's
RUN npm install && npm install --global gulp-cli && npm install gulp-mocha --save

# Añado un usuario sin contraseña y lo ponga para ejecutar lo siguiente
RUN adduser -D usuarioIV
USER usuarioIV

# Ejecuto gulp para ejecutar los test's
CMD ["gulp"]