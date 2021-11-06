const express = require('express')
const posts = express.Router()
const demo1 = require('../models/demo1')

const {posts_c} = require('../controllers/postsController')
const { post } = require('./home')

posts.get('/', posts_c)

// Get all posts
posts.get('/all', async (req, res)=> {
    try{
        const demoPosts = await demo1.find();
        res.status(200).json(demoPosts)
    }catch{
        res.status(400).json({message: err})
    }
})


// Submits a post
posts.post('/', async (req,res)=>{
    // console.log(req.body);
    const demoPost = new demo1({
        title : req.body.title,
        description: req.body.description,
        price : req.body.price
    })
    // demoPost.save()
    //     .then(data => {
    //         res.status(200).json(data);
    //     })
    //     .catch(err => {
    //         res.json({message: err})
    //     })
    try{
        const savedDemoPost = await demoPost.save()
        res.status(200).json(savedDemoPost)
    }catch(err){
        res.status(400).json({message: err})
    }

})

module.exports = posts