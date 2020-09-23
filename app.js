const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', (req,res, next) => {
    res.render('pages/home', {
        style_two: true
    });
})

app.get('/about', (req,res,next) => {
    res.render('pages/about', {
        style_two: false
    });
})

app.get('/service', (req,res,next) => {
    res.render('pages/service', {
        style_two: false
    });
})

app.get('/contact', (req,res,next) => {
    res.render('pages/contact', {
        style_two: false
    });
})

app.get('/sign-in', (req,res,next) => {
    res.render('auth/login', {
        style_two: false
    });
})
app.get('/sign-up', (req,res,next) => {
    res.render('auth/sign-up', {
        style_two: false
    });
})

module.exports = app;