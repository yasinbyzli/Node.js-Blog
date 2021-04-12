// * Protocol
const http = require('http');

// ? farklı dosyalarla iletişime geçmek için.
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;


const indexPage = fs.readFileSync('index.html');
const contactPage = fs.readFileSync('./Contact.html');
const aboutPage = fs.readFileSync('./About.html');
const notFoundPage = fs.readFileSync('./404.html');

// ? parametre olarak callback fonksiyon alıyor.
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        return res.end(indexPage);
    } else if (req.url === '/about'){
        return res.end(aboutPage);
    } else if (req.url === '/contact'){
        return res.end(contactPage);
    } else {
        res.statusCode = 404;
        res.end(notFoundPage);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server Çalışıyor, http://${hostname}:${port}`);
})
