# Elección correcta y justificada del contenedor base.

Lo primero para poder trabajar con **docker** es elegir un contenedor base, hay diversas imágenes que bien pueden ser proporcionadas por contenedores oficiales con diferentes entornos, como en mi caso NodeJS,o contenedores con el sistema operativo. 

Tras realizar una búsqueda en internet y ver distintas opciones para mi proyecto como slim, debian o ubuntu, opte por usar **alpine**. Los motivos porque el uso este son los siguientes:
- Eficiencia.
- Liviano.
- Por lo que he leído, la mayoría suelen acabar dando algún problema de compatibilidad y este no las suele dar.
- Bastante segura.
- Imágenes muy pequeñas, que ha hecho que piense que para este proyecto en concreto lo vea más interesante que Debian que esta más desarrollado.

## Pruebas
Además, para comprobar que es el mejor he optado por hacer una comparación con distintas imagenes, siempre de NodeJS y como se comento en la parte teorica de la asignautra es mejor usar imagenes oficales de un lenagejauje que instalar un sistema opertaivo e instalar lo que necesitemos.

Por tanto, he decidio comparar 3 imagenes de este lenguaje que son node:14.14.0-alpine, node:10 y node:10-buster-slim. Y he obtenido los siguientes resultados:


| Imagen | Tamaño | Tiempo Usuario | Tiempo del Sistema | Tiempo Real |
| -- | -- | -- | -- |
| node:14.14.0-alpine| 173MB | 0.026s | 0.034s | 1.585s
| node:10 | 967MB | 0.037s  |0.017s | 1.60s
| node:10-buster-slim | 205MB| 0.036s | 0.034s | 2.398s