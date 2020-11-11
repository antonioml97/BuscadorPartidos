# Justificación de la configuración Travis
Una vez creado una cuenta y vincularla con este repositorio, la configuración esta en [.travis.yml](https://github.com/antonioml97/BuscadorPartidos/blob/master/.travis.yml), que contiene lo siguiente:
```
language: minimal
script:
- docker run -t -v `pwd`:/test antonioml97/buscadorpartidos
```
Utilizo una imagen muy básica, que se puede consultar [aquí](https://docs.travis-ci.com/user/languages/minimal-and-generic/), que contiene cosas basicas entras ellas Docker y la herramientas de red.


Anteriormente estaba con cosas que eran innecesarias que son las siguientes:
- Uso de: *services: docker*
- Uso de: *docker pull*

Gracias a la corrección de este he aprendido que esas cosas no sirven de nada, ya que por defecto viene declaro la primera cosa innecesaria, y en el caso de docker pull, tampoco es necesario ya que docker run lo descarga si no lo tenemos ya instalado.



