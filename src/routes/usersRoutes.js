let express = require('express');
const router = express.Router()

let usersController = require('../controllers/usersController');

router.get('/', usersController.myAccount)

module.exports = router