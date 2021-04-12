const path = require('path');
const express = require('express');

const app = express();

const hostName = '127.0.0.1';
const port = 3000;

// ? test url'ne gittiğin zaman console bir şey yazdır.
// ? middleware 3 adet parametre alır
app.use(express.static('public'))

app.get('/', (req, res) => {
    // ? __dirname -> app.js'in bulunduğu dizini verir.
    res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.get('/about', (req, res) => {
    // ? __dirname -> app.js'in bulunduğu dizini verir.
    res.sendFile(path.resolve(__dirname, 'about.html'));
})

app.get('/contact', (req, res) => {
    // ? __dirname -> app.js'in bulunduğu dizini verir.
    res.sendFile(path.resolve(__dirname, 'contact.html'));
})



app.listen(port, hostName, () => {
    console.log(`Server Çalışıyor, http://${hostName}:${port}`);
})

 