const express = require('express')
const posts = express.Router()

const {posts_c} = require('../controllers/postsController')

posts.get('/', posts_c)

module.exports = posts