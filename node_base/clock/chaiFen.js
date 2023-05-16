const { log } = require('console')
const fs = require('fs')
const path = require('path')
const { resolve } = require('path/posix')
let regsty = /<style>[\s\S]*<\/style>/
let regjs = /<script>[\s\S]*<\/script>/
let reghtml = /<body>[\s\S]*<\/body>/

fs.readFile(path.join(__dirname,'./index.html'),'utf-8', function(err,data){
    if (err) {
        return  console.log('读取失败' +err.message);
    }
    console.log(111);
    resolveCss(data)
    resolveHtml(data)
    resolveJS(data)
    
})
function resolveCss(css ){
    let r1 = regsty.exec(css)
    console.log('css',r1);
    let newCss = r1[0].replace('<style>','').replace('</style>','')
    console.log(newCss);
    fs.writeFile(path.join(__dirname,'./index.css'),newCss,function(err){
        if (err) {
            return  console.log('读取失败' +err.message);
        }
        console.log('写入css成功');
    })
}
function resolveHtml(data ){
    let r1 = reghtml.exec(data)
    // console.log('css',r1);
    let newCss = r1[0].replace('<style>','').replace('</style>','')
    // console.log(newCss);
    fs.writeFile(path.join(__dirname,'./index1.html'),newCss,function(err){
        if (err) {
            return  console.log('读取失败' +err.message);
        }
        console.log('写入css成功');
    })
}
function resolveJS(css ){
    let r1 = regjs.exec(css)
    // console.log('css',r1);
    let newCss = r1[0].replace('<style>','').replace('</style>','')
    // console.log(newCss);
    fs.writeFile(path.join(__dirname,'./index.js'),newCss,function(err){
        if (err) {
            return  console.log('读取失败' +err.message);
        }
        console.log('写入css成功');
    })
}