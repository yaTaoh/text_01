const { log } = require('console')
const fs = require ('fs')
const path = require ('path')
fs.readFile(path.join(__dirname,'./素材/成绩.txt'),'utf8',function(err,data){
    if (err) {
       return console.log('读取失败'+ err.message);
    }
    let arr = data.split(' ')
    let arr1 = []
    arr.forEach(item => {
        arr1.push(item.replace('=',':'))
    })
    console.log(arr1);
    let arr2 = arr1.join('\r\n')
    console.log(arr2);

    fs.writeFile(path.join(__dirname,'./素材/成绩1.txt'),arr2, function(err){
        if (err) {
            return console.log('读取失败'+ err.message);
        }
        console.log('写入陈宫');
    })
})