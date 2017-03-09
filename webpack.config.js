const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
    entry: {
        app: path.join(__dirname,'./src/test/app.es6'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: './',
        filename: 'js/[name].js',
        // chunkFilename: 'lib/[id].bundle.js'
    },
    //加载器
    module: {
        // 加载器
        loaders: [
            // 解析.vue文件
            // {
            //     test: /\.vue$/,
            //     loader: 'vue'
            // },
            // 转化ES6的语法
            {
                test: /\.(js|es6)$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    'presets': ['babel-preset-es2015','babel-preset-stage-2'],
                    'plugins': ['transform-runtime']

                }
            },
            // 编译css并自动添加css前缀
            {
                test: /\.css$/,
                loaders: [
                    'style',
                    'css?importLoaders=1',
                    'postcss-loader?sourceMap=inline'
                ]
            },
            //.less 文件想要编译，scss就需要这些东西！来编译处理
            {
                test: /\.less$/,
                loaders: [
                    'style',
                    'css?importLoaders=1',
                    'postcss-loader?sourceMap=inline',
                    'less'
                ],
            },
            // 图片转化，小于8K自动转化为base64的编码
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                query: {
                    limit: 1,
                    name: '/images/[name].[ext]'
                }
                //在这无论是直接loader 后面跟参数(像url跟参一样)url-loader?limit=8192,或者是后面跟着一个对象 query,都是可以的.类似get请求？
            },
            //字体？
            {
                test: /\.((eot|ttf|otf|woff|woff2)(\?.*)?|svg(\?.*))$/,
                loader: 'url-loader',
                query: {
                    limit: 200000,
                    name: '/fonts/[name].[ext]'
                }
            },
            //html模板编译？
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            }
        ]
    },
    //postcss配置
    postcss: () => {
        return [
            require('autoprefixer')
        ];
    },
    less:{
      sourceMap: true
    },
    // .vue的配置。需要单独出来配置
    // vue: {
    //     loaders: {
    //         css: VueCSSExtractPlugin.extract('style-loader', 'css!autoprefixer'),
    //         less: VueCSSExtractPlugin.extract('style-loader', 'css!autoprefixer!less'),
    //         js: 'babel'
    //     }
    // },
    // 配置babel转化成es5的语法
    // babel: {
    //     presets: ['es2015', 'stage-0'],
    //     plugins: ['transform-runtime', 'transform-object-assign']
    // },
    // resolve: {
    //     // require时省略的扩展名，如：require('module') 不需要module.js
    //     extensions: ['', '.js', '.less', '.es6', '.vue', '.html'],
    //     // 别名，可以直接使用别名来代表设定的路径以及其他
    //     alias: {
    //
    //     }
    // },
    //sourece-map
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            title: 'test',
            template: 'src/test/app.tpl',
            filename: 'name.html',
            inject: true
        }),
    ]

};

module.exports = config;