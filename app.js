const express = require("express");
// Template Engine
const exphbs = require("express-handlebars");
// veritabanı bağlantısı için
const mongoose = require("mongoose");
// dosya eklemek için
const fileUpload = require("express-fileupload");
const generateDate = require("./helpers/generateDate").generateDate;
// session
const expressSession = require("express-session");
const connectMongo = require("connect-mongo");
// delete
var methodOverride = require('method-override');

const hostName = "127.0.0.1";
const port = 3000;

// Eğer boyle bir veritabanı yoksa bizim adımıza oluşturur.
mongoose.connect("mongodb://127.0.0.1/nodeblog_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true, // unique
});

const app = express();

// session işlemi
app.use(
  expressSession({
    secret: "testotesto", // güvenlik anahtarı
    resave: false,
    saveUninitialized: true,
    store: connectMongo.create({ mongoUrl: "mongodb://127.0.0.1/nodeblog_db" }),
  })
);

// ? Flash - Message Middleware
app.use((req, res, next) => {
  res.locals.sessionFlash = req.session.sessionFlash;
  delete req.session.sessionFlash;
  next();
});

// ? Dosya yukleme işlemi için
app.use(fileUpload());

// ? Middleware
app.use(express.static("public"));

// ? Delete override middleware
app.use(methodOverride('_method'))

app.engine("handlebars", exphbs({ helpers: { generateDate } }));
app.set("view engine", "handlebars");

// parse application/x-www-form-urlencoded - Veritabanı verileri yakalayıp kaydetmek için
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

// ? Display link middleware
app.use((req, res, next) => {
  const { userId } = req.session;
  if (userId) {
    res.locals = {
      displayLink: true,
    };
  } else {
    res.locals = {
      displayLink: false,
    };
  }
  next();
});

// ? Routes işlemleri - Middleware
const main = require("./routes/main");
const posts = require("./routes/posts");
const users = require("./routes/users");
const admin = require("./routes/admin");

app.use("/", main);
app.use("/posts", posts);
app.use("/users", users);
app.use("/admin", admin)

// ? Server dinleme
app.listen(port, hostName, () => {
  console.log(`Server Çalışıyor, http://${hostName}:${port}`);
});
