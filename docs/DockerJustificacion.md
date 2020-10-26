# Elección correcta y justificada del contenedor base.

Lo primero para poder trabajar con **docker** es elegir un contenedor base, hay diversas imágenes que bien pueden ser proporcionadas por contenedores oficiales con diferentes entornos, como en mi caso NodeJS,o contenedores con el sistema operativo. 

Tras realizar una búsqueda en internet y ver distintas opciones para mi proyecto como slim, debian o ubuntu, opte por usar **alpine**. Los motivos porque el uso este son los siguientes:
- Eficiencia.
- Liviano.
- Por lo que he leído, la mayoría suelen acabar dando algún problema de compatibilidad y este no las suele dar.
- Bastante segura.
- Imágenes muy pequeñas, que ha hecho que piense que para este proyecto en concreto lo vea más interesante que Debian que esta más desarrollado.
