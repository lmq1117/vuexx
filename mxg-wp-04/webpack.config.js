const path = require('path')
module.exports = {
    //development production
    mode:'development',
    entry: './src/main.js',
    output: {
        //相对路径 会报错
        /*
        Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
 - configuration.output.path: The provided value "./dist/" is not an absolute path!
   -> The output directory as **absolute path** (required).
        */
        // path:'./dist/',
        path: path.join(__dirname, './dist/'),
        filename: 'bundle.js'
    }
}