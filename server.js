const express = require('express');
const TonWeb = require('tonweb');
const app = express();
const port = process.env.PORT || 3000;

// Используйте ваш реальный URL для размещения веб-приложения, например, URL вашего сервера или GitHub Pages
const REAL_URL = 'https://wzbk1.github.io/soncoin/';

app.get('/connect', (req, res) => {
    // Генерация URL для подключения кошелька
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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
