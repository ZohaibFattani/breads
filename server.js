// Dependencies
let express = require('express')

//Configuration
require('dotenv').config()
let PORT = process.env.PORT
let app = express()

// Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))


//Routes
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

// Breads
let breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })
  

//Listen
app.listen(PORT, () => {
    console.log('listening on port', PORT)
})
