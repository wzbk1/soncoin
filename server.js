const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const TonWeb = require('tonweb');

const app = express();
const port = process.env.PORT || 3000;

const REAL_URL = 'https://wzbk1.github.io/soncoin/';
const TELEGRAM_BOT_TOKEN = 'YOUR-TELEGRAM-BOT-TOKEN';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;

app.use(bodyParser.json());

app.get('/connect', (req, res) => {
    const connectionUrl = `ton://connect?url=${REAL_URL}/manifest.json`;
    res.json({ url: connectionUrl });
});

app.get('/manifest.json', (req, res) => {
    res.json({
        name: 'Your DApp Name',
        url: REAL_URL,
        iconUrl: `${REAL_URL}/icon.png`
    });
});

app.post(`/${TELEGRAM_BOT_TOKEN}`, (req, res) => {
    const update = req.body;

    if (update.message) {
        const chatId = update.message.chat.id;
        const text = update.message.text;

        if (text === '/connect_wallet') {
            const connectionUrl = `https://wzbk1.github.io/soncoin/connect/manifest.json`;
            const messageText = `Click the link to connect your TON Wallet: ${connectionUrl}`;

            sendMessage(chatId, messageText);
        } else {
            sendMessage(chatId, 'Received your message');
        }
    }

    res.sendStatus(200);
});

const sendMessage = (chatId, text) => {
    const url = `${TELEGRAM_API_URL}/sendMessage`;
    const payload = {
        chat_id: chatId,
        text: text
    };

    request.post(url, { json: payload });
};

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
