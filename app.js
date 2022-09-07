const express = require('express')
const path = require('path')


let app = express()

const publicPath = path.resolve(__dirname, './public')
app.use( express.static(publicPath))

app.listen(3000, () => {
    console.log('Servidor corriendo')
})

app.get('/', (req, res) => {
    let htmlPath = path.join(__dirname, './views/index.html')
    res.sendFile(htmlPath)
})