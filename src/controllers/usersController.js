let path = require('path');

let usersController = {
    index: (req, res) => {
        res.render('users/MyAccount')
}}


module.exports = usersController