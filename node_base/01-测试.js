const { log } = require('console')
const fs = require ('fs')
fs.readFile('./01-测试.js','utf8',function(err , datastr){
    console.log(err);
    console.log('----');
    console.log(111);
})
fs.writeFile('./01-测试写入','测试写入',function(err){
    if (err) {
        return console.log('写入失败');
    }else {console.log('写入成功');}
})