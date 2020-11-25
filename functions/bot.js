const Telegraf = require("telegraf");
const fetch = require("node-fetch");

const API_URL = process.env.API_URL;

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

//bot.start((ctx) => ctx.reply(process.uptime()));
bot.help(ctx => ctx.reply('/dondeJuega{NombreEquipo}{Jornada-1} \t Te dice en que estadio juega un eqipo en una jornada' ))

//Declaramos la funcion
bot.onText(/^\/start/, function(msg){
  // Imprimimos en consola el mensaje recibido.
  console.log(msg);
  // msg.chat.id se encarga de recoger el id del chat donde se está realizando la petición.
  var chatId = msg.chat.id;
  // msg.from.username se encarga de recoger el @alias del usuario.
  var username = msg.from.username;
  // Enviamos un mensaje indicando el id del chat, y concatenamos el nombre del usuario con nuestro saludo
  bot.sendMessage(chatId, "Hola, " + username + " soy un bot y te digo donde juega un equipo");
});

// bot.command('Today', async (ctx) => {

//   let res = 'Los partidos que se juegan hoy son:\n'
  
//   const response = await axios.get(config.service.api_today)

//   if ( response.data.length > 0){
//       for( var i = 0; i < response.data.length ; i++){ 
//         res +=  "" +response.data[i]._player1 + " vs " + response.data[i]._player2 + "\n";
//       }

//   }
//   ctx.reply(res)
// })


exports.handler = async (event, ctx, callback) => {
  // Obtenemos el cuerpo del mensaje, y lo separamos en el chat y en el texto enviado

	// let msg = JSON.parse(event.body);
	// let text = msg.message.text;
	// let chat_id = msg.message.chat.id;
  // let cadena = ""
  
  // if (text == "/dondeJuega"){
	// 	cadena = "Falta";
	// 	cadena += "\n";
	// 	cadena += "Por ejemplo, /puntosBilal";
	// }

  await bot.handleUpdate(JSON.parse(event.body));
  return callback(null, { statusCode: 200 });
};