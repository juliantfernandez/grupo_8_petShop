let express = require('express')
const path = require('path')
let app = express()

app.set('view engine', 'ejs')
const publicPath = path.resolve(__dirname, './public')
app.use( express.static(publicPath))
app.use(express.urlencoded({extended:false})); // POST
app.use(express.json()); // POST

const methodOverride = require('method-override'); // PUT,DELETE
app.use(methodOverride('_method')); // PUT,DELETE

let productsRoutes = require('./src/routes/productsRoutes')
app.use('/', productsRoutes)

const usersRoutes = require('./src/routes/usersRoutes')
app.use('/users', usersRoutes)

app.listen(3000, () => {
    console.log('Servidor corriendo')
})


// app.listen(process.env.PORT || 3000, function() {
//     console.log("Servidor corriendo");
// })


