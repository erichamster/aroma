// Function Expression
var say = function (message) {
  console.log(`Say ${message}`);
}

say("Hi");

function callFun(message, func) {
  func(message);
}

callFun("Well", say);

// Ví dụ trong web để gọi function và chờ kết quả về mới làm gì đó dùng cách gọi callback funtion này
function myFunction(x, y, callback) {
  var result = x * y;
  callback(result);
}

myFunction(2, 4, say);