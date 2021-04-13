const path = require('path');
const express = require('express');
// Template Engine
const exphbs = require('express-handlebars');
// veritabanı bağlantısı için
const mongoose = require('mongoose');

const hostName = '127.0.0.1';
const port = 3000;

// Eğer boyle bir veritabanı yoksa bizim adımıza oluşturur.
await mongoose.connect('mongodb://127.0.0.1/nodeblog_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const app = express();

// ? Middleware
app.use(express.static('public'))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req,res) => {
    res.render('site/index');
})

app.get('/about', (req,res) => {
    res.render('site/about');
})

app.get('/blog', (req,res) => {
    res.render('site/blog');
})

app.get('/contact', (req,res) => {
    res.render('site/contact');
})

app.get('/single-page', (req,res) => {
    res.render('site/single-page');
})

app.get('/login', (req,res) => {
    res.render('site/login');
})

app.get('/register', (req,res) => {
    res.render('site/register');
})

app.listen(port, hostName, () => {
    console.log(`Server Çalışıyor, http://${hostName}:${port}`);
})

 