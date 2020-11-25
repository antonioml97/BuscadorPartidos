const functions = require('firebase-functions');
const axios = require('axios')
const { Telegraf } = require('telegraf')

let config = require('./env.json');

if (Object.keys(functions.config()).length){
  config = functions.config();
}

const bot = new Telegraf(config.services.telegram_key);

bot.start((ctx) => ctx.reply('Bienvenido al bot de Buscador-Paridos'))
bot.help(ctx => ctx.reply('/dondeJuega{NombreEquipo}{Jornada-1} \t Te dice en que estadio juegara un eqipo en una jornada' ))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

bot.command('dondeJuega', async (ctx) => {

    let res = 'Juegan :\n'
    const NombreEquipo = ctx.message.text.substr(12,8)
    const Jornada= ctx.message.text.substr(-9)
    console.log(NombreEquipo)
    console.log(Jornada)
    
    const response = await axios.get(config.services.api+ 'buscarEstadio.js?equipo_recibido=' + NombreEquipo + '&jornada_recibido=' + Jornada  )
    res += response.data[0].Estadio
    ctx.reply(res)
  })


exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
