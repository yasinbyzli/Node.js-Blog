const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req,res) => {
    res.render('site/index');
})

router.get('/admin', (req,res) => {
    res.render('admin/index');
})

router.get('/blog', (req,res) => {
    Post.find({}).sort({$natural : -1}).lean()
        .exec((error, post) => {
            res.render('site/blog', {posts : post});
        })    
})

router.get('/contact', (req,res) => {
    res.render('site/contact');
})

router.get('/single-page', (req,res) => {
    res.render('site/single-page');
})

module.exports = router;