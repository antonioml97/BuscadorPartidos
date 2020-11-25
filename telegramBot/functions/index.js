const functions = require('firebase-functions');
const { Telegraf } = require('telegraf');


let config = ""

if (Object.keys(functions.config()).length){
  config = functions.config().telegram-key.key;
  console.log(config)
}

const bot = new Telegraf(config);
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.start((ctx) => ctx.reply('Bienvenido'))