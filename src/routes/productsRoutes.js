let express = require('express');
const router = express.Router()

let productsController = require('../controllers/productsController');

router.get('/', productsController.index)

router.get('/productAdd', productsController.add)

router.get('/productEdit', productsController.edit)


module.exports = router