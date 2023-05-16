
const { log } = require('console');
let fs = require ('fs')
fs.readFile(__dirname+'/素材/成绩.txt','utf8',function(err,data){
    if (err) {
        return console.log("读取失败"+ err.message);
    }
    let arrOld = data.split(' ')
    console.log(arrOld);
    let arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=',':'))
    })
    let new1 = arrNew.join('\r\n')
    fs.writeFile(__dirname+'/素材/成绩-ok.txt',new1,function(err){
        if (err ){
           return console.log('斜土失败'+err.message);
        }
        console.log('写入成功');
    })  
})
