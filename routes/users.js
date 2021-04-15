const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/register', (req, res) => {
    res.render('site/register');
})

router.post('/register', (req, res) => {
    User.create(req.body, (error, user) => {
        req.session.sessionFlash = {
            type : 'alert alert-success',
            message : 'Kullanıcı başarılı bir şekilde oluşturuldu'
        }
        res.redirect('/users/login');
    })
})

router.get('/login', (req,res) => {
    res.render('site/login');
})

router.post('/login', (req,res) => {
    const {email, passowrd} = req.body;

    User.findOne({email}, (error, user) => {
        if (user) {
            if (user.passowrd == passowrd) {
                req.session.userId = user._id;
                res.redirect('/');
            } else {
                res.redirect('/users/login');
            }
        } else {
            res.redirect('/users/register');
        }
    })

})

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    })
})

module.exports = router;