const controller = require("./1985208_Ex03-StudentController"),
  slowController = require("./1985208_Ex05-SlowStudentController"),
  generate = controller.generate,
  average = controller.average,
  normalize = controller.normalize,
  slowGenerate = slowController.generate,
  slowAverage = slowController.average,
  slowNormalize = slowController.normalize;

const students = [
  {
    code: "NTD255",
    name: "Nguyễn Thành Đạt",
    subjects: [{
      name: "Toán rời rạc",
      score: 0
    },
    {
      name: "Lý thuyết đồ thị",
      score: 0
    },
    {
      name: "Đại số tuyến tính",
      score: 0
    },
    {
      name: "Trí tuệ nhân tạo",
      score: 0
    }]
  },
  {
    code: "NTD256",
    name: "Nguyễn Thành Đồng",
    subjects: [{
      name: "Toán rời rạc",
      score: 0
    },
    {
      name: "Lý thuyết đồ thị",
      score: 0
    },
    {
      name: "Đại số tuyến tính",
      score: 0
    },
    {
      name: "Trí tuệ nhân tạo",
      score: 0
    }]
  },
  {
    code: "NTD257",
    name: "Nguyễn Thành Đô",
    subjects: [{
      name: "Toán rời rạc",
      score: 0
    },
    {
      name: "Lý thuyết đồ thị",
      score: 0
    },
    {
      name: "Đại số tuyến tính",
      score: 0
    },
    {
      name: "Trí tuệ nhân tạo",
      score: 0
    }]
  }
];

// console.log(`Điểm của SV:\n${JSON.stringify(generate(students))}\n`);
// console.log(`Điểm TB của SV:\n${JSON.stringify(average(students))}\n`);
// console.log(`Điểm của SV theo dạng số thực:\n${JSON.stringify(normalize(students))}\n`);

(async function () {
  await slowGenerate(students);
  console.log(`Điểm của SV:\n${JSON.stringify(students)}\n`);

  // await slowAverage(students);
  // console.log(`Điểm TB của SV:\n${JSON.stringify(students)}\n`);

  // await slowNormalize(students);
  // console.log(`Điểm của SV theo dạng số thực:\n${JSON.stringify(students)}\n`);
})()