let express = require('express');
const router = express.Router()

let usersController = require('../controllers/usersController');

router.get('/', usersController.index) // Eliminar esta ruta cuando esten las otras dos funcionando

router.get('/register', usersController.register) 

router.get('/login', usersController.login)

router.get('/cart', usersController.cart)


module.exports = router