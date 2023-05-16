const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
    let str = `123456`
    res.end(str)
})
server.listen(80,()=>{
    console.log('server running at http://127.0.0.1');
})