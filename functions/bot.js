const Telegraf = require("telegraf");
const fetch = require("node-fetch");

const API_URL = process.env.API_URL;

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

//bot.start((ctx) => ctx.reply(process.uptime()));
bot.help(ctx => ctx.reply('/dondeJuega{NombreEquipo}{Jornada-1} \t Te dice en que estadio juega un eqipo en una jornada' ))

bot.command('start', async (ctx) => {
   // Imprimimos en consola el mensaje recibido.
   console.log(msg);
   // msg.chat.id se encarga de recoger el id del chat donde se está realizando la petición.
   var chatId = msg.chat.id;
   // msg.from.username se encarga de recoger el @alias del usuario.
   var username = msg.from.username;
   // Enviamos un mensaje indicando el id del chat, y concatenamos el nombre del usuario con nuestro saludo
   bot.telegram.sendMessage(ctx.chatId, "Hola, " + username + " soy un bot y te digo donde juega un equipo");
})



exports.handler = async (event, ctx, callback) => {
  await bot.handleUpdate(JSON.parse(event.body));
  return callback(null, { statusCode: 200 });
};