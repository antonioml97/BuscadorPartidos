# Justificación de la configuración Travis
Una vez creado una cuenta y vincularla con este repositorio, la configuración esta en [.travis.yml](https://github.com/antonioml97/BuscadorPartidos/blob/master/.travis.yml)
Que contiene lo siguiente:
```
language: node_js
node_js:
- 10
- 14
script:
- docker run -t -v `pwd`:/test antonioml97/buscadorpartidos
```
Indiciamos la versión del lenguaje y su versión y posteriormente lanzamos la orden para llevar acabo el servicio de Docker. Como he optado por utilizar Docker en este CI, este fichero es muy simple.


Anteriormente estaba con cosas que eran innecesarias que son las siguientes:
- Uso de: *services: docker*
- Uso de: *docker pull*

Gracias a la corrección de este he aprendido que esas cosas no sirven de nada, ya que por defecto viene declaro la primera cosa innecesaria, y en el caso de docker pull, tampoco es necesario ya que docker run lo descarga si no lo tenemos ya instalado.

Por otro lado, me he dado cuenta que se podría optimizar cambiando la imagen por una más básica. Sin embargo, como no se si en un futuro cambiare Travis para hacerlo de una manera distintas opto por dejarlo así. 

