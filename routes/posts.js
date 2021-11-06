const express = require('express')
const posts = express.Router()

const {posts_controller} = require('../controllers/postsController')

posts.get('/', (req, res) => {
    res.status(200).send(
        `
        <h1 style="text-align: center;">
            POSTS PAGE
        </h1>
        <div style="margin-left: auto; margin-right: auto; width: 4%">
            <a href="/">
                <button style="background: yellowgreen; padding: 10px; border:none">
                    Go Back
                </button>
            </a>
        </div>
        `)
})

module.exports = posts