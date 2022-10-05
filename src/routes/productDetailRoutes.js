let express = require('express');
const router = express.Router()

let productsDetailController = require('../controllers/productsDetailController');

router.get('/', productsDetailController.index)


module.exports = router