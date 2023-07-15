const random = require("./1985208_Ex02-Random");

/**
 * Phát sinh điểm ngẫu nhiên cho tất cả các SV
 * @param {*} students 
 */
function generate(students) {
  for (let i = 0; i < students.length; i++) {
    let subjects = students[i].subjects;
    for (let j = 0; j < subjects.length; j++) {
      let subject = subjects[j];
      subject.score = random(0, 10);
    }
  }
  return students;
}

/**
 * bổ sung thuộc tính điểm trung bình cho mỗi SV
 * @param {*} students 
 */
function average(students) {
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let subjects = students[i].subjects;
    student.average = subjects.map(e => e.score).reduce((a, b) => a + b) / subjects.length;
  }
  return students;
}

/**
 * Định dạng điểm của SV theo dạng số thực có 2 chữ số thập phân
 * @param {*} students 
 */
function normalize(students) {
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let subjects = students[i].subjects;
    student.average = parseFloat(student.average).toFixed(2);

    for (let j = 0; j < subjects.length; j++) {
      let subject = subjects[j];
      subject.score = parseFloat(subject.score).toFixed(2);
    }
  }
  return students;
}

module.exports = { generate, average, normalize };

