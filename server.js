const express = require('express');
const TonWeb = require('tonweb');
const app = express();
const port = process.env.PORT || 3000;

app.get('/connect', (req, res) => {
    // Генерация URL для подключения кошелька
    const connectionUrl = 'ton://connect'; // Это пример, замените на реальный URL
    res.json({ url: connectionUrl });
});

app.get('/manifest.json', (req, res) => {
    res.json({
        name: 'Your DApp Name',
        url: 'http://localhost:3000',
        iconUrl: 'http://localhost:3000/icon.png'
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});