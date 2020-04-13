const bufferData = new Buffer("some random string")
const jsonData = bufferData.toJSON(bufferData)
console.log(jsonData)