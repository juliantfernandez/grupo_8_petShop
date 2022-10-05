let express = require('express')
const path = require('path')
let app = express()

app.set('view engine', 'ejs')
const publicPath = path.resolve(__dirname, './public')
app.use( express.static(publicPath))

let productsRoutes = require('./src/routes/productsRoutes')
app.use('/', productsRoutes)

const usersRoutes = require('./src/routes/usersRoutes')
app.use('/users', usersRoutes)

const productDetailRoutes = require('./src/routes/productDetailRoutes')
app.use('/productDetail', productDetailRoutes)

const cartRoutes = require('./src/routes/cartRoutes')
app.use('/cart', cartRoutes)

app.listen(3000, () => {
    console.log('Servidor corriendo')
})


// app.listen(process.env.PORT || 3000, function() {
//     console.log("Servidor corriendo");
// })


