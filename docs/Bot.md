# Despliegue de bot en Telegram con Netlify


# Vamos con el bot
```
curl -X POST https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/setWebhook -H "Content-type: application-json" -d '{"url": "https://5fbe49b5cfbf6558729ed590--brave-stonebraker-fea4f4.netlify.app/.netlify/functions/bot", "allowed_updates": ["callback_query", "message"]}'
```