# Justificación de la configuración Shippable
- Lo primero que tenemos que hacer es indicar que lenguaje de programación vamos a usar para ello simplemente basta con indicar lo siguiente:
```
language: node_js
```
- El siguiente proceso es indicar las versiones del lenguaje donde vamos a usar el lenguaje, ya que se puede hacer de varias versiones paralelamente,podríamos poner más versiones pero opto por usar estas dos al ser ya versiones estables, para ello es necesario esto:
```
node_js:
- "10"
- "14"
```
- Por último, instalamos el gestor de tareas y ejecutamos los test.
Con esto sencillamente instalamos el gestor de tareas, en mi caso Gulp, y el modulo que le permite realizar las instalaciones.
```                                                                               
- npm install -g gulp
- npm install gulp-install
```
Esta parte, el gestor de tareas se encarga de instalar las dependencias y ejecutar los test, del orden que se ve en el código.
```
- gulp install
- gulp test
```
## ¿Cómo configurar Shippable?
Este proceseso es muy sencillo y similiar a Travis. Basta con darse de alta en [Shippable](https://app.shippable.com/) a traves de Github.

![Shippable](https://github.com/antonioml97/BuscadorPartidos/blob/master/docs/img/Shippable.png)

Lo siguiente es habilitar el repositorio que queremos, en este caso, el del proyecto que estamos creando en esta asignatura. 

![ShippableRepro](https://github.com/antonioml97/BuscadorPartidos/blob/master/docs/img/shippable-Repro.png)

Por último, añadir el fichero *shippable.yml*, que se encuentra [aquí](https://github.com/antonioml97/BuscadorPartidos/blob/master/shippable.yml)