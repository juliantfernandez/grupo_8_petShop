let path = require('path');

let productsController = {
    index: (req, res) => {

        let products = [
            {
                id: 1,
                nombre: 'Puppy Cachorros',
                precio: 2500,
                descripcion:'Comida para perros pequeños',
            },
            {
                id: 2,
                nombre: 'Grandes',
                precio: 3500,
                descripcion:'Comida para perros grandes',
        },
            {
                id:3,
                nombre:'Transportador',
                precio: 15000,
                descripcion: 'Jaula transportadora intermedia',

            },
            {
                id:4,
                nombre:'Litera',
                precio:5000,
                descripcion:'Litera sanitaria mediana',
            }
        ]

        res.render('index', {p: products})
    }
}

module.exports = productsController