const express = require('express');
// Template Engine
const exphbs = require('express-handlebars');
// veritabanı bağlantısı için
const mongoose = require('mongoose');
// dosya eklemek için
const fileUpload = require('express-fileupload'); 
const generateDate = require('./helpers/generateDate').generateDate;
// session
const expressSession = require('express-session');
const connectMongo = require('connect-mongo');

const hostName = '127.0.0.1';
const port = 3000;

// Eğer boyle bir veritabanı yoksa bizim adımıza oluşturur.
mongoose.connect('mongodb://127.0.0.1/nodeblog_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true // unique 
});

const app = express();

// session işlemi
app.use(expressSession({
  secret : 'testotesto', // güvenlik anahtarı
  resave : false,
  saveUninitialized : true,
  store : connectMongo.create({ mongoUrl : 'mongodb://127.0.0.1/nodeblog_db' })
}))

app.use(fileUpload());

// ? Middleware
app.use(express.static('public'))

app.engine('handlebars', exphbs({helpers : {generateDate}}));
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded - Veritabanı verileri yakalayıp kaydetmek için
app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json())

/* kendi middleware'mız.
const myMiddleWare = (req, res, next) => {
  console.log('LOGGED');
  next();
} 

app.use('/', myMiddleWare);
*/


// ? Routes işlemleri - Middleware 
const main = require('./routes/main');
const posts = require('./routes/posts');
const users = require('./routes/users');

app.use('/', main);
app.use('/posts', posts);
app.use('/users', users);

// ? Server dinleme
app.listen(port, hostName, () => {
    console.log(`Server Çalışıyor, http://${hostName}:${port}`);
})
