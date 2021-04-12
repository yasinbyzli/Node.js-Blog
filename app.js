const path = require('path');
const express = require('express');

const app = express();

const hostName = '127.0.0.1';
const port = 3000;

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


app.get('/users/:userId/movies/:moviesId', (req, res) => {
    res.send(`
        <h1>Kullanıcı Adı : ${req.params.userId}<h1>
        <h1>Film adı : ${req.params.moviesId}</h1>
    `)
})

app.listen(port, hostName, () => {
    console.log(`Server Çalışıyor, http://${hostName}:${port}`);
})

