const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

//conection db
mongoose.connect('mongodb://localhost/api_shop')
    .then(db => console.log('DB TERHUBUNG'))
    .catch(err => console.log(err))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
        extended: true
    })
)

require('./router/router')(app)
const PORT = process.env.PORT || 3000

app.listen(PORT,() => {
    console.log('Server Working  To Port 3000')
})