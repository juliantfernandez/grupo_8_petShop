let express = require('express');
const router = express.Router()

let productsController = require('../controllers/productsController');

router.get('/', productsController.index)

router.get('/productCreate', productsController.create)

router.get('/productEdit:id', productsController.edit)

router.put('/productEdit:id', productsController.update)

router.get('/productDetail', productsController.detail)

router.get('/productDetail/:id', productsController.detailId)

router.post('/productCreate', productsController.store)

router.delete('/delete/:id', productsController.delete)





module.exports = router