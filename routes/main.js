const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req,res) => {
    res.render('site/index');
})

router.get('/about', (req,res) => {
    res.render('site/about');
})

router.get('/blog', (req,res) => {
    Post.find({}).lean()
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

router.get('/login', (req,res) => {
    res.render('site/login');
})

router.get('/register', (req,res) => {
    res.render('site/register');
})

module.exports = router;