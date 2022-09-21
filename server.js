// Dependencies
let express = require('express')

//Configuration
require('dotenv').config()
let PORT = process.env.PORT
let app = express()

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

// Breads
let breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//Listen
app.listen(PORT, () => {
    console.log('listening on port', PORT)
})
