# ¿Qué es esta herramienta? 
Es una alternativa a docker.

## Funcionamiento

Para llevar a cabo su puesta en marcha he seguidos estos pasos:
- Etiquetarlo correctamente. ```docker tag docker.pkg.github.com/antonioml97/buscadorpartidos/buscadorpartidos:latest ghcr.io/antonioml97/buscardorpartidos```
- Creamos un token, y lo ponemos como varible de entorno ```expor CR_PAT=<token>```
- Iniciamos sesision ``` echo $CR_PAT | docker login ghcr.io -u antonioml97 --password-stdin ```
- Y desplegamos la imagen ```docker push ghcr.io/antonioml97/buscadorpartidos ```

El resultado es el [siguiente](https://github.com/users/antonioml97/packages/container/package/buscadorpartidos)