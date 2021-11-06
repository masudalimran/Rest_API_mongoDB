let path = require('path');
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

module.exports = {posts_c}