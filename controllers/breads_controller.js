let express = require('express')
let breads = express.Router()
let Bread = require('../models/bread.js')

// Index
breads.get('/', (req, res) => {
    res.send(Bread)
})

// Show
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
})

module.exports = breads