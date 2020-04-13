const fs  = require('fs')
fs.writeFile('./tmp/newfile.txt',"hello wolrd" ,(err)=>{
    if(err) console.error(err)
    console.log("successfully done")
})
const buffer = new Buffer([0x48,0x65,0x6c,0x6f])
fs.writeFile('./tmp/binary.txt',buffer,(err)=>{
    if(err) console.log(err)
    console.log("buffer data written sucessfully")
    
})
try{
    fs.writeFileSync('./tmp/sync.txt',"this is the data is going at the file")
} catch(err){
    console.log("there is  an  erro", err)
}