var fs = require('fs');

var filepath = __dirname + "/calculator.js";

const content = fs.readFileSync(filepath, 'utf-8');

fs.writeFileSync('newfile.js', content);
// console.log(content);
// console.log("lalalal");

// fs.readFile(filepath, 'utf-8', function(err, result) {
//   if(err !== null){
//     console.log("co loi")
//   } else {
//     console.log(result)
//   }
// })
// console.log("lalalal");
