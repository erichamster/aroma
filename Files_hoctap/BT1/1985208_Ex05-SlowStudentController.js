const random = require("./1985208_Ex04-SlowRandom");

/**
 * Phát sinh điểm ngẫu nhiên cho tất cả các SV
 * @param {*} students 
 */
// async function generate(students) {
//   for (let i = 0; i < students.length; i++) {
//     let subjects = students[i].subjects;
//     for (let j = 0; j < subjects.length; j++) {
//       let subject = subjects[j];
//       subject.score = await random(0, 10);
//     }
//   }
//   return students;
// }

const generate = (students) => {
  return Promise.all(
    students.map(student => {
      return Promise.all(
        student.subjects.map(subject => random(0, 10))
      ).then(arr => {
        for (let i = 0; i < arr.length; i++) {
          student.subjects[i].score = arr[i];
        }
      })
    })
  )
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

