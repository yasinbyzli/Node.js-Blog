const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title      : { type: String, require: true },
  // ? user tablosu ile ilişkilendiriliyor
  author     : { type: mongoose.Schema.Types.ObjectId, ref : 'users'},
  content    : { type: String, require: true },
  post_image : { type: String, require: true },
  // ? category tablosu ile ilişkilendiriyor.
  category   : { type: mongoose.Schema.Types.ObjectId, ref : 'categories'},
  date       : { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', PostSchema);