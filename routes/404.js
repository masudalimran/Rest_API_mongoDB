const express = require('express')
const error = express.Router()

const {error_c} = require('../controllers/404Controller')

error.get('/', error_c)

module.exports = error