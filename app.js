const express = require('express');
// Template Engine
const exphbs = require('express-handlebars');
// veritabanı bağlantısı için
const mongoose = require('mongoose');

const hostName = '127.0.0.1';
const port = 3000;

// Eğer boyle bir veritabanı yoksa bizim adımıza oluşturur.
mongoose.connect('mongodb://127.0.0.1/nodeblog_db', {
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

// ? Routes işlemleri - Middleware 
const main = require('./routes/main');
app.use('/', main);


app.listen(port, hostName, () => {
    console.log(`Server Çalışıyor, http://${hostName}:${port}`);
})

 