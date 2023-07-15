function RandomNumber(min, max) {
  return new Promise(resolve => {
    setTimeout(function () {
      resolve(Math.floor(Math.random() * max) + min);
    }, 1000)
  })
}

module.exports = RandomNumber;