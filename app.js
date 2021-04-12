// * Protocol
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// ? parametre olarak callback fonksiyon alıyor.
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Node.js');
});

server.listen(port, hostname, () => {
    console.log(`Server Çalışıyor, http://${hostname}:${port}`);
})
