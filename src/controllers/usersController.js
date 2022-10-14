let path = require('path');

let usersController = {
    index: (req, res) => {
        res.render('users/MyAccount')
},
    register: (req, res) => {
        res.render('users/register')
},
    login: (req, res) => {
        res.render('users/login')
},
    cart: (req, res) => {
        res.render('cart')
}}


module.exports = usersController