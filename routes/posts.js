const express = require('express')
const posts = express.Router()
const demo1 = require('../models/demo1')

const {posts_c} = require('../controllers/postsController')
// const { post } = require('./home')

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

// Specific Post
posts.get('/:postId', async (req, res)=> {
    // console.log(req.params.postId);
    // res.send(`Specific Post ${req.params.postId}`)
    try{
        const specificPost = await demo1.findById(req.params.postId)
        res.json(specificPost)
    }catch(err){
        res.json({message: err})
    }
})

// Delete Specific Post
posts.delete('/:postId', async (req, res)=> {
    try{
        await demo1.deleteOne({_id: req.params.postId})
        const allPosts = await demo1.find() 
        res.json(allPosts)
    }catch{
        res.send("Error Found While Deleting Post")
    }
})

//  Update a post
posts.patch('/:postId', async (req, res)=>{
    try{
        await demo1.updateOne(
            {_id: req.params.postId},
            {$set: 
                {title: req.body.title, description: req.body.description, price: req.body.price}
            }
        )
        const allPosts = await demo1.find()
        res.json(allPosts)
    }catch{
        res.send("Error Found While Updating Post")
    }
})
module.exports = posts