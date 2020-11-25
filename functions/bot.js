const Telegraf = require("telegraf");
const fetch = require("node-fetch");

const API_URL = process.env.API_URL;

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start((ctx) => ctx.reply(process.uptime()));
bot.help(ctx => ctx.reply('/mostarJornada-1 \t Muestra todos los partidos de la jornada-1.\n /dondeJuega{NombreEquipo}{Jornada-1} \t Te dice en que estadio juega un eqipo en una jornada' ))
exports.handler = async (event, ctx, callback) => {
  await bot.handleUpdate(JSON.parse(event.body));
  return callback(null, { statusCode: 200 });
};