let path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))

let productsController = {
    index: (req, res) => {
        res.render('index', {p: products})
    },
    add: (req,res) => {
        res.render('products/productAdd')
    },
    edit: (req,res) => (
        res.render('products/productEdit')
    )
}

module.exports = productsController