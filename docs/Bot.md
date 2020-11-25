# Despliegue de bot en Telegram con Netlify


# Vamos con el bot
```
curl -X POST https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/setWebhook -H "Content-type: application-json" -d '{"url": "https://5fbe4ec32abe4c0008efb8ed--brave-stonebraker-fea4f4.netlify.app/.netlify/functions/bot", "allowed_updates": ["callback_query", "message"]}'
```