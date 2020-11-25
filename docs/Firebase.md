# Despliegue de bot en Telegram con Firebase
Para empezar con la plataforma desarrolada por Google, Firebase, lo primero que tenemos que hacer es estar registrado e instalar las distintas depencias necesarias.
Basta con poner los siguientes comandos:
```
npm install -g firebase-admin
npm install -g firebase-admin
npm install -g firebase-functions
```
Y luego logearnos con ``` firebase login ```

## Configuración y pasos previos
Lo primero que tenemos que hacer es ejecutar:
``` firebase init functions ```
Esto lo hacemos con el objetivo de linkear nuestro proyecto en Firebase y además nos crear la estructura.
Nuestro fichero desde donde vamos a construir nuestro bot es [/telegramBot/functions/index.js]().


Para crear el bot nos vamos a la pagina oficial de [Telegram](https://telegram.org/), y vamos a conseguir una Telegram API key, para ello le damos a API, y luego Telegram Bots, y buscaremos el BotFather en telegram e indicaremos que vamos a hacer un bot, con la orden */newbot* obtenido asi nuestra API key, la cual debemos guardar.

Con el fin de desarrolar de nuestro bot usare el framework diseñado para telegram y node telegraf. Que hace esta parte del hito5 mucho mas sencilla, la [documentación](https://telegraf.js.org/#/?id=features) es bastante buena y completa.

## Variables de entorno
Como la seguridad es principal no podemos dejar nuestra API KEY a la vista de todos, por este motivo Firebase nos proporciona esta herramienta:
``` firebase functions:config set <key>="<Nuestra variable>"```