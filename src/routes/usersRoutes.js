let express = require('express');
const router = express.Router()

let usersController = require('../controllers/usersController');

router.get('/myAccount', usersController.index)

module.exports = router