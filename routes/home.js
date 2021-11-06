const express = require('express')
const home = express.Router()

const {home_controller} = require('../controllers/homeController')

home.get('/', (req, res) => {
    res.status(404).send(`<h1>HOME PAGE</h1>`)
})

module.exports = home