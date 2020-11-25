const Telegraf = require("telegraf");
const fetch = require("node-fetch");

const API_URL = process.env.API_URL;

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start((ctx) => ctx.reply(process.uptime()));
bot.help(ctx => ctx.reply('/dondeJuega{NombreEquipo}{Jornada-1} \t Te dice en que estadio juegara un eqipo en una jornada' ))

// bot.command('Prueba', async (ctx) => {
//    // msg.chat.id se encarga de recoger el id del chat donde se está realizando la petición.
//    var chatId = msg.chat.id;
//    // msg.from.username se encarga de recoger el @alias del usuario.
//    var username = msg.from.username;
//    var res= "Hola, " + username + " soy un bot y te digo donde juega un equipo";
//    // Enviamos un mensaje indicando el id del chat, y concatenamos el nombre del usuario con nuestro saludo
//    ctx.reply(ctx.chat.idres)
// })
bot.hears(/\/dondeJuega (.+)/, async (ctx) => {
  //Guardo el nombre del equipo
  var NombreEquipo=ctx.message.text.substr(7,-9);
  // Guardo la jornada
  var Jornada="Jornada-"+ ctx.message.text.substr(-1);

  const prueba = "Esto es una prueba" 
  const res = await (await fetch(API_URL + '/buscarEstadio.js?equipo_recibido=${NombreEquipo}&jornada_recibido=$${NombreEquipo}')).json();
  bot.telegram.sendMessage(ctx.chat.id, res);
});


exports.handler = async (event, ctx, callback) => {
  await bot.handleUpdate(JSON.parse(event.body));
  return callback(null, { statusCode: 200 });
};