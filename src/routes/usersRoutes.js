const express = require('express');
const router = express.Router()

const usersController = require('../controllers/usersController');
const uploadFile = require('../../middlewares/multerMiddleware');
const validations = require('../../middlewares/validateRegisterFormMW');
const guestMiddleware = require('../../middlewares/guestMiddleware');
const authMiddleware = require('../../Middlewares/authMiddleware');

router.get('/', usersController.index) // Eliminar esta ruta cuando esten las otras dos funcionando

router.get('/register', guestMiddleware, usersController.register) 

router.post('/register', uploadFile.single('fotoPerfil'), validations, usersController.registerProcess)

router.get('/login', guestMiddleware, usersController.login)

router.post('/login', usersController.loginProcess)

router.get('/cart', usersController.cart)

router.get('/profile', authMiddleware, usersController.profile)

router.get('/logout', usersController.logout)


module.exports = router