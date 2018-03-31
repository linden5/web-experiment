/**
 * Mock server初始化，接口路径和数据存在./data/下的js文件中
 * 详细格式请参考./data/hello.js
 */

const express = require('express') 
const fs = require('fs')
const path = require('path')

var app = express()

// 初始化mock数据
fs.readdir(path.join(__dirname, './data/'), (err, files) => {
    if (err) {
        throw Error('can not read json files from disk')
    }
    files.forEach((file) => {
        var matches = (/^(.*)\.js$/i).exec(file);
        if (matches && matches.length > 1) {
            var api = require(path.join(__dirname, './data/', file))
            // 可以看到,./data/中的文件暴露三个属性
            // 一个是method，指请求方法
            // 一个是path，指路径，
            // 一个是data,指返回数据
            app[api.method](api.path, (req, res) => {
                res.json(api.data)
            })
        }
    }) 
    console.log('mock server initialized: ' + files.length)
})


app.listen(3000, () => {
    console.log('Mock server started')
})