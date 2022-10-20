let path = require('path');

let usersController = {
    index: (req, res) => {
        res.render('Users/MyAccount')
},
    register: (req, res) => {
        res.render('Users/register')
},
    login: (req, res) => {
        res.render('Users/login')
},
    cart: (req, res) => {
        res.render('cart')
},
    profile: (req, res) => {
        res.render('Users/profile')
}}  


module.exports = usersController