let express = require('express')
const path = require('path')
let app = express()

app.set('view engine', 'ejs')
const publicPath = path.resolve(__dirname, './public')
app.use( express.static(publicPath))

let productsRoutes = require('./src/routes/productsRoutes')
app.use('/', productsRoutes)

const usersRoutes = require('./src/routes/usersRoutes')
app.use('/', usersRoutes)



app.listen(3000, () => {
    console.log('Servidor corriendo')
})


// app.listen(process.env.PORT || 3000, function() {
//     console.log("Servidor corriendo");
// })


