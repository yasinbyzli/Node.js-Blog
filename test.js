const mongoose = require('mongoose');

const Post = require('./models/Post');

mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

Post.create({
    title : 'Benim ilk post başlığım',
    content : 'Benim ilk post içeriğim',
}, (error, post) => {
    console.log(error, post);
})