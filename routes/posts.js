const express = require('express')
const posts = express.Router()
// const demo1 = require('../models/demo1')

const {
    posts_c,
    allPosts_c,
    submitPost_c,
    specificPost_c,
    deleteSpecificPost_c,
    updateSpecificPost_c
} = require('../controllers/postsController')
// const { post } = require('./home')

posts.get('/', posts_c)

// Get all posts
posts.get('/all', allPosts_c)

// Submits a post
posts.post('/', submitPost_c)

// Specific Post
posts.get('/:postId', specificPost_c)

// Delete Specific Post
posts.delete('/:postId', deleteSpecificPost_c)

//  Update a post
posts.patch('/:postId', updateSpecificPost_c)
module.exports = posts