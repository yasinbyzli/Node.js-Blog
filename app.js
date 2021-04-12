const path = require('path');
const express = require('express');

const app = express();

const hostName = '127.0.0.1';
const port = 3000;

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './site/index.html'));
})

app.get('/about', (req,res) => {
    res.sendFile(path.resolve(__dirname, './site/about.html'));
})

app.get('/blog', (req,res) => {
    res.sendFile(path.resolve(__dirname, './site/blog.html'));
})


app.listen(port, hostName, () => {
    console.log(`Server Çalışıyor, http://${hostName}:${port}`);
})

 