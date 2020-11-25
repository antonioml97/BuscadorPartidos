const Telegraf = require("telegraf");
const fetch = require("node-fetch");

const API_URL = process.env.API_URL;

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);


bot.start((ctx) => ctx.reply(process.uptime()));


exports.handler = async (event, ctx, callback) => {
    await bot.handleUpdate(JSON.parse(event.body));
    return callback(null, { statusCode: 200 });
};