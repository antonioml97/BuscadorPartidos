# Despliegue de bot en Telegram con Netlify


# Vamos con el bot
```
curl -X POST https://api.telegram.org/bot1489634912:AAHAsNZPKG_DNZAOVDI9TASCWjFdw9CHl8E/setWebhook -H "Content-type: application-json" -d '{"url": "https://buscadorpartidos.netlify.app/.netlify/functions/bot", "allowed_updates": ["callback_query", "message"]}'
```
https://api.telegram.org/bot1489634912:AAHAsNZPKG_DNZAOVDI9TASCWjFdw9CHl8E?url=https://buscadorpartidos.netlify.app/.netlify/functions/bot


OK:
https://api.telegram.org/bot1489634912:AAHAsNZPKG_DNZAOVDI9TASCWjFdw9CHl8E/setwebhook?url=https://buscadorpartidos.netlify.app/.netlify/functions/bot