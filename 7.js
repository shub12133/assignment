const fs = require('fs')
console.log(typeof fs)

fs.readFile ('./tmp/newfile.txt',{encoding:'utf8'},(error,data)=>{
    if (error) console.error(error)
     const replacedata =  data.replace(/hello/,'hii');
      fs.writeFile('./tmp/newfile.txt', replacedata,'utf8', (err)=>{
        if (err) console.log(err)
           console.log('done')

           fs.unlink('./tmp/newfile.txt')
           function (err){
               if (err) throw err;
               console.log("file deleted");
           }
      });
})      
        
     
    
    
 
