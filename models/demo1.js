const mongoose = require('mongoose')

const demo1Schema = mongoose.Schema({
    title: {
        type: String,
        required: true  
    }, 
    description: {
        type: String,
        required: true  
    },
    price: Number,
    date: {
        type: Date,
        default: Date.now
    },

})

module.exports = mongoose.model('demo_posts_collection', demo1Schema)