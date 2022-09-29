let path = require('path');

let productsController = {
    index: (req, res) => {

        let products = [
            {
                id: 1,
                nombre: 'Puppy Cachorros',
                price: 2500,
                descripcion:'Comida para perros pequeños',
            },
            {
                id: 2,
                nombre: 'Grandes',
                price: 3500,
                descripcion:'Comida para perros grandes',
        }
        ]

        res.render('index', {p: products})
    }
}

module.exports = productsController