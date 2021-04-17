const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const Post = require('../models/Post');
const User = require('../models/User');

router.get("/", (req, res) => {
    res.render('/admin/admin')
})

router.get('/categories', (req, res) => {
    Category.find({}).sort({$natural : -1}).lean().then(categories => {
        res.render('admin/categories', {categories : categories})
    })
})

router.post('/categories', (req, res) => {
    Category.create(req.body, (error, category) => {
       if (!error) {
        res.redirect('/admin/categories');
       } 
    });
})

router.delete('/categories/:_id', (req, res) => {
    Category.remove({_id : req.params._id}).then(() => {
        res.redirect('/categories');
    }).catch(err => {
        console.log(err);
    })
})

router.get('/posts', (req, res) => {
    Post.find({}).populate({path : 'category', model : Category}).sort({$natural : -1}).lean().then(posts => {
        res.render('admin/posts', {posts : posts});
    })
})

module.exports = router;