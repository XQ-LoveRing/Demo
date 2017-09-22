
const path = require('path');
//提取出来作为单独的文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// HtmlWebPlugin= require('html-webpack-plugin');


module.exports = {
    entry: './src/js/app/index.js',
    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: 'app.bundle.js'
    },
    // plugins:[
        
           // $ 代替 jQuery
            // new webpack.providePlugin({
            //     $: 'jquery'
            // }),
    
            //编译成功时 提示 
            // new WebpackNotifierPlugin({
            //     title: 'webpack 编译成功',
            //     contentImage: path.resolve(process.cwd(), './img/avatar.jpeg'),
            //     alwaysNotify: true
            // }),
    
            //其他less等文件   转码  生成css文件
            // new ExtractTextPlugin('_[name].css'),
            //     //disable: false,
                //allchunks= true
            
        //提取公共模块  到 common.js 
            // new webpack.optimize.CommonChunkPlugin({
            //     name:'common',
            //     minChunks: Infinity
            // })
            //压缩js
        //     new UglifyJSPlugin(),
        //     new HtmlWebPlugin({
        //         template: 'index.html'
        //     })
        // ],
    
    module: {
        rules: [
           
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'autoprefixer-loader']
            },
            
            // {
            //     test: /\.(png|jpg|jpeg|gif)$/,
            //     use: {
            //         loader: 'file-loader',
            //         options:{
            //             name:'[name]_[sha512:hash:base64:7].[ext]'
            //         }

            //     }
            // },
            {
                test: /\.(png|jpg|gif)$/,
                // use: 'url-loader?limit=1024&name=[path][name].[ext]'
                use:'url-loader'
            },
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
             // {
            //     test: /\.css$/,
            //     use:  ExtractTextPlugin.extract({
            //         fallback :'style-loader',
            //         use: ['css-loader','autoprefixer-loader']
            //     })
            // },
            // {
                //     test: /\.less$/,
                //     use: ExtractTextPlugin.extract({
                //         fallback:'style-loader',
                //         use:['css-loader',{
                //             loader:'less-loader',
                //             options: {
                //                sourceMap: true
                //             }
                //         }]
                //     })
                // },
                
                // {
                //     test: /\.scss$/,
                //     use: ExtractTextPlugin.extract({
                //         fallback:'style-loader',
                //         use:['css-loader',{
                //             loader:'sass-loader',
                //             options: {
                //                sourceMap: true
                //             }
                //         }]
                //     })
                // },
    
        ]
    }
    
}



