const path = require("path")

module.exports = {
    entry:'./src/main.js',
    mode:'development',
    output:{
        path:path.join(__dirname,'./dist/'),
        filename:'bundle.js'
    }
}