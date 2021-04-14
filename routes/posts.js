const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const path = require('path');

router.get('/new', (req,res) => {
    res.render('site/addpost');
})

router.get('/:id', (req,res) => {
    Post.findById(req.params.id).lean().then(post => {
        res.render('site/post', {post : post});
    })
})

router.post('/test', (req,res) => {
    // Calısma projemizde dosyayı klasöre ekleme
    let post_image = req.files.post_image;
    post_image.mv(path.resolve(__dirname, '../public/img/postimages', post_image.name))
    
    // Veri tabanına veriyi ekler
    Post.create({
        ...req.body,
        post_image : `/img/postimages/${post_image.name}`
    });
    res.redirect('/');
})

module.exports = router;