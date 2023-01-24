const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end("WELCOME TO HOME")
        return
    }
    if(req.url==='/about')
    {
        res.end("HERE IS OUR SHORT END")
        return
    }
    res.end(`
    <h1>OOPS</h1>
    <p>CAN'T FIND</p>
    <a href="/">back home</a>
    `)
    
})
server.listen(5003)
