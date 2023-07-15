console.log(__dirname);
console.log(__filename);
var time = 0;
var timer = setInterval(function () {
  time++;
  console.log(`${time}`)
  if (time = 10) {
    clearInterval(timer);
  }
}, 2000)