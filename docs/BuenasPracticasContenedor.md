# ¿ Cómo saber que tenemos en buen contenedor?
El objetivo de llevar a cabo lo que se conoce como buenas practicas es tener un contenedor lo más eficiente posible, para eso hay que buscar una serie de hitos principales que son:
- Minimizar el tamaño de la imagen.
- Maximizar uso caché y legibilidad.
- Minimizar el número de capas.

Buscando esos objetivos he hecho lo siguiente:
- En lugar de hacer la orden RUN varias veces, he optado por hacerlo todo a la vez (excepto el usuario), quedando de esta manera:
  `RUN npm install && npm install --global gulp-cli && npm install gulp-mocha --save`
  .De esta manera usando multilineas conseguimos maximizar el cache y reducir capas ya que cada comando de Docker crea una capa que se almacenara en caché.d
- También he añadido el metadato de *maintainer*, que indica quien es el autor.

                                                                                                                                        