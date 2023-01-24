const http=require('http')

const server=http.createServer((req,res)=>{
    res.write('WELCOME')
    res.end()
})
server.listen(5000)