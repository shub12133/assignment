const fs = require ('fs')
const path = require ('path')
console.log ("current directory",__dirname)

const filepath =__dirname + '/tmp/hello.txt'
console.log(filepath)
fs.readFile(filepath, {encoding:'utf8'}, (err,data)=>{
    if(err) return console.console.error(err)
    console.log('asynchronous read', data)
    
})

const syncsData = fs.readFileSync(filepath)
console.log("sync read",syncsData.toString())
console.log("bye")