let express = require('express');
const router = express.Router()

let productsController = require('../controllers/productsController');

router.get('/', productsController.index)

module.exports = router