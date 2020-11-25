const Telegraf = require("telegraf");
const fetch = require("node-fetch");

const API_URL = process.env.API_URL;

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.hears(/^\/start/, function(msg){
  var chatId = msg.chat.id;
  // msg.from.username se encarga de recoger el @alias del usuario.
  var username = msg.from.username;
  // Enviamos un mensaje indicando el id del chat, y concatenamos el nombre del usuario con nuestro saludo
  bot.sendMessage(chatId, "Hola, " + username + " soy un bot y se decirte donde juega un equipo de futbol");
});
bot.help(ctx => ctx.reply('/dondejuega{NombreEquipo}{Jornada-1} \t Te dice en que estadio juega un eqipo en una jornada' ))


bot.hears(/\/dondejuega (.+)/, async (ctx) => {
  const genre = ctx.message.text.substr(7);
  const res = await (await fetch(API_URL + `/available/genre/${genre}`)).json();
  bot.telegram.sendMessage(ctx.chat.id, res);
});


exports.handler = async (event, ctx, callback) => {
  // Obtenemos el cuerpo del mensaje, y lo separamos en el chat y en el texto enviado

	let msg = JSON.parse(event.body);
	let text = msg.message.text;
	let chat_id = msg.message.chat.id;
  let cadena = ""
  
  if (text == "/dondejuega"){
		cadena = "Falta un equipo y una jornada";
		cadena += "\n";
		cadena += "Por ejemplo, /dondejuegaGranadaJornada-1";
	}

  await bot.handleUpdate(JSON.parse(event.body));
  return callback(null, { statusCode: 200 });
};