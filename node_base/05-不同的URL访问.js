const http = require('http')
const server = http.createServer()
server.on ('request',function(req ,res){
    let url = req.url
    let content = `404 Not found`
    if (url === '/' ||url === '/index.html'){`<h1>首页</h1>`}
    else if (url === '/about.html'){`<h1>关于</h1>`}
    res.setHeader ('content-type','text/html:charset =utf-8')
    res.end(content)

})
server.listen(8080,()=> {
    console.log('http://127.0.0.1');
})