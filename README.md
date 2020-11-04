# IV-20-21
# BuscarPartidos

La idea de este microservicio que voy a desarrollar consiste en poder introducir una fecha o una jornada, o el nombre de un equipo y consultar los partidos que hay ese día o esa jornada. Además, para obtener el nombre entrenador de un equipo.

El motivo por el cual he elegido este problema es porque siempre que quiero ver algo similar necesito darle mucho clicks a las plataformas actuales y recorrer varios submenus hasta llegar a la información que busco, en cambio de esta manera va a ser mucho más rápido.

Para implementarlo he elegido NodeJS.

## Test
En las herramientas del proyecto se encuentra la justificación o el motivo que me ha hecho decidir usar estas herramientas para llevar acabo los test. [Más información](https://github.com/antonioml97/IV-20-21/blob/master/docs/Herramientas.md)

Para llevar a acabo los test creados para el proyecto hay que seguir los [siguientes pasos](https://github.com/antonioml97/IV-20-21/blob/master/docs/PasosTest.md).

El fichero donde esta el test se encuentra [aquí](https://github.com/antonioml97/IV-20-21/blob/master/test/testChai.js).

El uso de este test es comprobar que se leen bien los datos y con el formato adecuado, siendo un pequeño avance pero algo significativo para el proyecto, y adicionalmente, ver que existe la jornada 1. Una prueba de su uso es la siguiente [imagen](https://github.com/antonioml97/BuscadorPartidos/blob/master/docs/img/testFinal.png).

## Docker
- Elección correcta y justificación de contenedor base. [Más información](https://github.com/antonioml97/BuscadorPartidos/blob/master/docs/DockerJustificacion.md)
- Fichero para la configuración del docker, llamado **Dockerfile**. [Aquí](https://github.com/antonioml97/BuscadorPartidos/blob/master/Dockerfile).
- Buena práctica para dockerfile. [¿Como lo he hecho?](https://github.com/antonioml97/BuscadorPartidos/blob/master/docs/BuenasPracticasContenedor.md).
- Comparación de tiempos y velocidad de distintas imágenes [aquí](https://github.com/antonioml97/BuscadorPartidos/blob/master/docs/ComparacionImagenes.md).

## Docker Hub
- Primeros pasos y actualización automática [aquí](https://github.com/antonioml97/BuscadorPartidos/blob/master/docs/DockerHub.md).
- Contenedor Docker Hub [en este enlace](https://hub.docker.com/r/antonioml97/buscadorpartidos).

## ¿Cómo ejecutar el test con Docker Hub?
- Lo primero es descargar este repositorio.
- Ejecutar: ```docker run -t -v `pwd`:/test antonioml97/buscadorpartidos ```

## GITHUB CONTAINER REGISTRY
- Explicación de GHCR [aquí](https://github.com/antonioml97/BuscadorPartidos/blob/master/docs/Github-Container-Registry.md).
- [Contenedor de Github](https://github.com/users/antonioml97/packages/container/package/buscadorpartidos).
- Ejecutar ```docker run -t -v `pwd`:/test ghcr.io/antonioml97/buscadorpartidos_github_registry ```

## Integración continua
### Integración continua funcionando y correcta justificación de la misma : Travis
- [Justificación de Travis](https://github.com/antonioml97/BuscadorPartidos/blob/master/docs/InformacionTravis.md).
- [Configurar Travis](https://github.com/antonioml97/BuscadorPartidos/blob/master/docs/ConfigurarTravis.md).
- Prueba de funcionamiento es esta imagen donde se ve que ha pasado los test para las 2 versiones distintas de NodeJS que he indicado en el archivo [.travis.yml](https://github.com/antonioml97/BuscadorPartidos/blob/master/.travis.yml). La imagen esta [aquí](https://github.com/antonioml97/BuscadorPartidos/blob/master/docs/img/PruebaTravis.png).
### Configuración de algún sistema de integración continua adicional : Shippable
- [Justificación de Shippable](https://github.com/antonioml97/BuscadorPartidos/blob/master/docs/InformacionShippable.md).
- [Configurar Shippable](https://github.com/antonioml97/BuscadorPartidos/blob/master/docs/ConfigurarShippable.md).
- [Prueba de funcionamiento](https://github.com/antonioml97/BuscadorPartidos/blob/master/docs/img/shipabble_ok.png).
### Uso de docker en el algun CI.
En mi caso, debido a lo sencillo que es usar la herramienta para crear contenedores conocida como Docker en Travis he optado por hacerlo ahi. De esta manera, haciendo los test con Travis consturte el contenedor y lo ejecuta. Su configuración es muy sencilla, basta con modificar el .travis.yml, de esta manera:
```
services:
- docker
before_install:
- docker pull antonioml97/buscadorpartidos
script:
- docker run -t -v `pwd`:/test antonioml97/buscadorpartidos
```
La primera linea indica que vamos a usar este servicio, la segunda se descarga la imagen que tenemos en dockerhub, y por ultimo, la tercera linea lo ejecuta. El resultado esta [aquí](https://github.com/antonioml97/BuscadorPartidos/blob/master/docs/img/Travis-Docker.png).
## Documentación del proyecto
Presentamos un listado con la documentación del proyecto en el estado actual:
- Herramientas usadas en el proyecto. [Más información](https://github.com/antonioml97/BuscadorPartidos/blob/master/docs/Herramientas.md)
- Historias de usuario y milestones. [Más información](https://github.com/antonioml97/BuscadorPartidos/blob/master/docs/HistoriasDeUsuario.md)

## Enlaces adicionales
- [Configuración de git](https://github.com/antonioml97/BuscadorPartidos/blob/master/docs/configGit.md)
- [Información consultada para hacer los test](https://www.paradigmadigital.com/dev/testeando-javascript-mocha-chai/)

## Autor
- Antonio Martín León
