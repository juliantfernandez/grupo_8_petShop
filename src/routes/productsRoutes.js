let express = require('express');
const router = express.Router()

let productsController = require('../controllers/productsController');

router.get('/', productsController.index)

router.get('/products', productsController.products)

module.exports = router