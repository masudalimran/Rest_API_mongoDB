let path = require('path');
const demo1 = require('../models/demo1')
let options = {
    root: path.join(__dirname, '../public/posts')
}
let postsFile = 'posts.html'
// ----------------------------------------------------------------
const posts_c= (req, res) => {
    res.sendFile(postsFile, options, (err)=>{
        if(err){
            console.log("Found Error - Posts Page");
        }else{
            console.log("No Error - Posts Page");
        }
    })
}

const allPosts_c = async (req, res)=> {
    try{
        const demoPosts = await demo1.find();
        res.status(200).json(demoPosts)
    }catch{
        res.status(400).json({message: err})
    }
}

const submitPost_c = async (req,res)=>{
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
}

const specificPost_c = async (req, res)=> {
    // console.log(req.params.postId);
    // res.send(`Specific Post ${req.params.postId}`)
    try{
        const specificPost = await demo1.findById(req.params.postId)
        res.json(specificPost)
    }catch(err){
        res.json({message: err})
    }
}

const deleteSpecificPost_c = async (req, res)=> {
    try{
        await demo1.deleteOne({_id: req.params.postId})
        const allPosts = await demo1.find() 
        res.json(allPosts)
    }catch{
        res.send("Error Found While Deleting Post")
    }
}

const updateSpecificPost_c = async (req, res)=>{
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
}
module.exports = {
    posts_c,
    allPosts_c,
    submitPost_c,
    specificPost_c,
    deleteSpecificPost_c,
    updateSpecificPost_c
}