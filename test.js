const mongoose = require('mongoose');

const Post = require('./models/Post');

mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

// * Tüm verileri getirir
/* Post.find({}, (error, post) => {
    console.log(error, post);
})
 */


// * Postlar içinde arama 
/* Post.find({
    title : 'Benim ilk post başlığım'
}, (error, post) => {
    console.log(error, post);
})
 */

// * Post oluşturma
/* Post.create({
    title : 'Benim ilk post başlığım',
    content : 'Benim ilk post içeriğim',
}, (error, post) => {
    console.log(error, post);
}) */

// * Güncelleme yapma
// Post.findByIdAndUpdate('60756904993e6a18a4abaaa0', {
//     title : 'Benim 1. post başlığım'
// }, (error, post) => {
//     console.log(error, post);
// })


// * Silme
Post.findByIdAndDelete('60756904993e6a18a4abaaa0', (error, post) => {
    console.log(error,post);
})