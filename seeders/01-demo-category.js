'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [
      { "id": "1", name: "Men", sumary: "Fracture of foot and toe, except ankle", imagepath: "/img/home/hero-slide1.png" },
      { "id": "2", name: "Woman", sumary: "Unsp physl fx low end ulna, l arm, subs for fx w routn heal", imagepath: "/img/home/hero-slide2.png" },
      { "id": "3", name: "Accessories", sumary: "Poisoning by oth psychostimulants, self-harm, init", imagepath: "/img/home/hero-slide3.png" },
      { "id": "4", name: "Footwear", sumary: "Oth physeal fracture of lower end radius, unsp arm, sequela", imagepath: "/img/home/hero-slide1.png" },
      { "id": "5", name: "Bay item", sumary: "Burn unsp degree of single l finger except thumb, sqla", imagepath: "/img/home/hero-slide2.png" },
      { "id": "6", name: "Electronics", sumary: "Other and unsp malignant neoplasm of skin of scalp and neck", imagepath: "/img/home/hero-slide3.png" },
      { "id": "7", name: "Food", sumary: "Maternal care for abnormality of vagina, third trimester", imagepath: "/img/home/hero-slide1.png" }
    ];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    })
    await queryInterface.bulkInsert('Categories', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
