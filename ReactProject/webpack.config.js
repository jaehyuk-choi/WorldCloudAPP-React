'use strict'
const path = require('path');
module.exports = {    
    entry: {        
        main: ['./src/main.js']    
    },    
    output: {        
        path: path.resolve(__dirname, './build'),        
        filename: '[name].js'    
    },    
    module: {        
        rules: [{            
            test: /\.js$/,            
            include: path.resolve(__dirname, './src'),     
            use: {
                loader: 'babel-loader'  
            }             
        }]    
    },    
    plugins: [],    
    devServer: {  
        static: {
            directory: './public'
        },             
        host: 'localhost',        
        port: 8080    
    }}
