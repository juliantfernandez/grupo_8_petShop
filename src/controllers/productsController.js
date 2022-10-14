let path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json')
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))

let productsController = {
    index: (req, res) => {
        products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
        res.render('index', {p: products});
    },
    
    create: (req,res) => {
        res.render('products/product-create-form');
    },
    
    edit: (req,res) => {
        let idProducto = req.params.id;
        let objProducto;

        for (let p of products){
            if (idProducto == p.id){
                objProducto=p;
                break;
            }
        }
        res.render('products/product-edit-form',{producto: objProducto})
    },
    
    detail: (req, res) => {
        res.render('products/productDetail', {p: products});
    },
    
    detailId: (req, res) => {
        let idProducto = req.params.id;
        let objProducto;

        for (let p of products){
            if (idProducto == p.id){
                objProducto=p;
                break;
            }
        }
        res.render('products/productId',{producto: objProducto});
    },
    
    store: (req, res) => {
        let productoNuevo = {
            id: (products[products.length-1].id)+1,
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            imagen:""
        }
        products.push(productoNuevo);
        fs.writeFileSync(productsFilePath,JSON.stringify(products,null," "));
        res.redirect('/');

    },
    update: (req,res) => {
        let idProducto = req.params.id;
        let objProducto;

        for (let p of products){
            if (idProducto == p.id){
                p.nombre = req.body.nombre;
                p.precio = req.body.precio;
                p.descripcion = req.body.descripcion;
                break;
            }
        }
        fs.writeFileSync(productsFilePath,JSON.stringify(products,null," "));
        res.redirect('/');
    },
    delete: (req,res) => {
        let idProducto = req.params.id;
        
        let arrProductos = products.filter(function(elemento){
            return elemento.id!=idProducto;
        })
        
        fs.writeFileSync(productsFilePath,JSON.stringify(products,null," "));
        res.redirect('/');
    }
}

module.exports = productsController