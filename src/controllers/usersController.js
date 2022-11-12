const { validationResult } = require('express-validator');
let path = require('path');
const User = require('../../models/User');
const bcryptjs = require('bcryptjs');
let session = require('express-session')

let usersController = {
    index: (req, res) => {
        res.render('Users/MyAccount')
},
    register: (req, res) => {
        res.render('Users/register')
        
},
    registerProcess: (req,res) => {
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0) {
            return res.render('Users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        //console.log(req.body, req.file)
        let userInDB = User.findByField('email', req.body.email);

        if(userInDB){
            return res.render('Users/register', {
                errors: {
                    email: {
                        msg: 'Este email ya esta registrado'
                    }
                },    
                oldData: req.body
        });
    }
        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            fotoPerfil: req.file.filename
        }

        let userCreated = User.create(userToCreate);

        return res.redirect('Users/login');
    },
    login: (req, res) => {
        res.render('Users/login')
        
    
},
    loginProcess: (req,res) => {
        let userToLogin = User.findByField('email', req.body.email);
        
        if (userToLogin) {
            let OkPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(OkPassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                return res.redirect('Users/profile')
            }
            return res.render('Users/login', {
                errors: {
                    email: {
                        msg: 'Las credenciales son invalidas'
                    }
                }
            })
                
        }

        return res.render('Users/login', {
            errors: {
                email: {
                    msg: 'No se encuentra este email en la base de datos '
                }
            }
        })

},
    cart: (req, res) => {
        res.render('cart')
    },
    profile: (req, res) => {
        res.render('Users/profile', {
            user: req.session.userLogged
        });
},

    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/')
},
}  


module.exports = usersController