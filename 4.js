const fs = require ('fs')
fs.stat('./tmp/hello.txt' , (err) =>{
    if(err) return console.error(err)
    console.log('the file exist')


})
try{
    fs.statSync('./tmp/hello.txt')
    console.log("syn file exist")
}catch(err){
    if (err.code === 'ENDENT'){
    console.error("file is directory doesnot exit")

  }
}