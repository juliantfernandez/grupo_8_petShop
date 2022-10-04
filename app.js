let express = require('express')
const path = require('path')
const usersController = require('./src/controllers/usersController')
let app = express()
app.set('view engine', 'ejs')
const publicPath = path.resolve(__dirname, './public')
app.use( express.static(publicPath))

let productsRoutes = require('./src/routes/productsRoutes')
app.use('/', productsRoutes)


// app.listen(3000, () => {
//     console.log('Servidor corriendo')
// })


app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})

// app.get('/', (req, res) => {
//     let htmlPath = path.join(__dirname, './views/index.html')
//     res.sendFile(htmlPath)
// })

// app.get('/product', (req, res) => {
//     res.sendFile(path.join(__dirname, './views/productDetail.html'))
// })

// app.get('/cart', (req, res) => {
//     res.sendFile(path.join(__dirname, './views/cart.html'))
// })

// app.get('/myAccount', (req, res) => {
//     res.sendFile(path.join(__dirname, './views/myAccount.html'))
// })
