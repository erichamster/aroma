var fs = require('fs');

// fs.mkdirSync('./lalala/lololo')
// fs.unlinkSync('lalala/index.txt')
// fs.rmdirSync('lalala')

fs.readdirSync('lalala')
  .forEach(function (file) {
    fs.unlinkSync(`lalala/${file}`)
    console.log(`Delete ${file}`);
  })
fs.rmdirSync('lalala');