const fs  = require('fs')
fs.readdir(__dirname,(err,files)=>{
    if (err) console.log(err)
    console.log(files)
})
const filesSyncs = fs.readdirSync('../../week1')
console.log(filesSyncs)