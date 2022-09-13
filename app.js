let express = require('express')
const path = require('path')

let app = express()

const publicPath = path.resolve(__dirname, './public')
app.use( express.static(publicPath))

app.listen(3000, () => {
    console.log('Servidor corriendo')
})

app.get('/', (req, res) => {
    let htmlPath = path.join(__dirname, './views/cart.html')
    res.sendFile(htmlPath)
})
// app.get('/', (req, res) => {
//     res.send('Hola Mundo!')
// })

// app.METHOD(PATH, HANDLER);
//  app.htpp('nombre de la ruta', funcion que se ejecuta )

// app.get('/productos', (req, res) => {
//     res.send('Productos!')
// })