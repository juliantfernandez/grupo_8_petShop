let express = require('express')
const path = require('path')
let app = express()
// let session = require('express-session')
const publicPath = path.resolve(__dirname, './public')
app.set('view engine', 'ejs')

// const userLoggedMiddleware = require('./Middlewares/userLoggedMiddleware')


// app.use(session({
//     secret: "Shhh, It's a secret",
//     resave: false,
//     saveUninitialized: false,
// }));
// app.use(userLoggedMiddleware)
app.use(express.static(publicPath))
// app.use(express.urlencoded({extended:false})); //Captura info x POST
// app.use(express.json()); // POST

// const methodOverride = require('method-override'); // PUT,DELETE
// app.use(methodOverride('_method')); // PUT,DELETE

let productsRoutes = require('./src/routes/productsRoutes')
app.use('/', productsRoutes)

// const usersRoutes = require('./src/routes/usersRoutes')
// app.use('/', usersRoutes)

// const petshopRoutes = require('./src/routes/petshopRoutes')
// app.use('/', petshopRoutes)

//  app.use((req,res,next) => {
//      res.status(404).render('error')
//  })

// app.listen(3000, () => {
//     console.log('Servidor corriendo')
// })


app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})


