/**
 * Mock server初始化，接口路径和数据存在./data/下的js文件中
 * 详细格式请参考./data/hello.js
 */

const express = require('express') 
const fs = require('fs')
const path = require('path')

var app = express()

function response(prefix, method, req, res) {
    var truePath = req.path.substring(prefix.length) + '.js'
    console.log(truePath)
    var filePath = path.join(__dirname, './data/', truePath)
    if (fs.existsSync(filePath)) {
        var api = require(filePath)
        // 可以看到,./data/中的文件暴露三个属性
        // 一个是method，指请求方法
        // 一个是path，指路径，
        // 一个是data,指返回数据
        if (api.method.toLowerCase() === method.toLowerCase()) {
            res.json(api.data)
        } else {
            res.status(405).end()
        }
    } else {
        res.status(404).end()
    }
}

// 初始化mock数据
app.get('/mock/*', (req, res) => {
    response('/mock/', 'get', req, res)
})

app.listen(3000, () => {
    console.log('Mock server started')
})