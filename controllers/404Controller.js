let path = require('path');
let options = {
    root: path.join(__dirname, '../public')
}
let errorFile = '404.html'
// ----------------------------------------------------------------
const error_c= (req, res) => {
    res.sendFile(errorFile, options, (err)=>{
        if(err){
            console.log("Found Error - Error Page");
        }else{
            console.log("No Error - Error Page");
        }
    })
}

module.exports = {error_c}