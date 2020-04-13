var fs = require("fs");
var stream;
stream = fs.createReadStream('./tmp/hello.txt');

stream.on("data", function(data) {
    var chunk = data.toString();
    console.log(chunk);
});