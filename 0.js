const fs = require('fs')
console.log(typeof fs)

fs.readFile ('./tmp/hello.txt',{encoding:'utf8'},(error,data)=>{
    if (error) return console.error(error)
     console.log("data from this file", data )
    
    
 });




 const syncdata = fs.readFileSync('./tmp/hello.txt',{ encoding:'utf8'})
  try{

    console.log("1",syncdata)
    console.log('2')

  }catch{
      console.log("no error")
  }
 

