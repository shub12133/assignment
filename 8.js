const fs = require('fs')
const http = require('http')
const port = 3000
const path = require('path')
const filePath = path.join(__dirname,'./views/about.html')
console.log(__dirname)
console.log(filePath)
const saveFilePath= path.join(__dirname,'db/users.js')

function postData(req,res){
    req.on('data', function (data) {
        const newData = data.toString()
        fs.writeFile(saveFilePath, newData , (err)=>{
            if(err) console.log(err)
            res.end("done saved")
        })
    })
}

function readHTML(req,res){
    fs.readFile(filePath,{encoding:'utf8'} ,(err,data)=>{
        if(err) console.error(err)
        
        res.end(data)
    })
}



const server = http.createServer((req,res)=>{
    if(req.url === '/') return readHTML(req,res)
    if(req.url == '/data') return postData(req,res)
})
server.listen(port, ()=>console.log(`server is running at port ${port}`))
