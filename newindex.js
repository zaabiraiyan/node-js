//filesystem//
const http=require('http')
const PORT=3000;
const fs=require('fs')

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":'text/html'})
    fs.readFile('index.html',(err,data)=>{
        if(err){
            res.writeHead(400)
            res,write("no found")
        }else{
            res.write(data)
        }
    })
})

server.listen(PORT,err=>{
    if(err){
        console.error(err)
    }else{
        console.log('running sucessfully',PORT)
    }
})