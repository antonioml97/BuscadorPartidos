# Justificación de la configuración Travis
Una vez creado una cuenta y vincularla con este repositorio, la configuracion esta en (.travis.yml)[https://github.com/antonioml97/BuscadorPartidos/blob/master/.travis.yml]

Como he optado por utlizar Docker en este CI, este fichero es muy simple.
Anteriormente estaba con cosas que eran inecesarias que son las siguientes:
- Uso de: *services: docker*
- Uso de: *docker pull*
                                          

Gracias a la correción de este he aprendido que esas cosas no sirven de nada, ya que por defecto viene declaro la primera cosa inencesaria, y en el caso de docker pull, tampoco es nesacario ya que docker run lo descarga si no lo tenemos ya instalado.

Por otro lado, me he dado cuenta que se podria optimizar cambiando la imagen por una más basica. Sin embargo, como no se si en un futuro cambiare Travis para hazerlo de una manera distintas opto por dejarlo asi. 