// 导入模块
const http = require('http')
const fs = require('fs')
const path = require('path')
const { log } = require('console')
// 创建web服务器

let server = http.createServer()
// 监听服务器
server.on('request',function(req,res){
    let url = req.url
    let fpath = url.join(__dirname,url)
    fs.readFile(fpath,'utf-8',function(err){
        if (err) return res.end('404 Not found.')
        res.end(res)
    })
})
// 启动服务器
server.listen('80',function(){
    console.log('http://127.0.0.1');
})