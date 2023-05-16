const fs = require('fs')
const path = require('path')
let regCSS1 = /<style>[\s\S]*<\/style>/
let regHtml1 = /<body>[\s\S]*<\/body>/
let regJS1 = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname,'index.html'),'utf8',function(err,data){
    if (err ){
        return console.log('读取失败'+ err.message);
    }
    console.log(111);
    reCss(data)
    // reHtml(data)
    // rejects(data)
})
function reCss(e){
    let arr = regCSS1.exec(e)
    let arr2 =arr[0].replace('<style>','').replace('</style>','')
    fs.writeFile(path.join(__dirname,'./test.css'),arr2,function(err){
        if (err ){
            return console.log('读取失败'+ err.message);
        }
        console.log('写入成功');
    })
}