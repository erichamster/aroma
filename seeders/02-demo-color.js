'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [{
      "id": "1",
      "name": "Purple",
      "sumary": "#c9526d",
      "imagepath": "http://dummyimage.com/30x30.png/dddddd/000000"
    }, {
      "id": "2",
      "name": "Maroon",
      "sumary": "#ab2352",
      "imagepath": "http://dummyimage.com/30x30.jpg/cc0000/ffffff"
    }, {
      "id": "3",
      "name": "Teal",
      "sumary": "#15853c",
      "imagepath": "http://dummyimage.com/30x30.png/dddddd/000000"
    }, {
      "id": "4",
      "name": "Pink",
      "sumary": "#45b78a",
      "imagepath": "http://dummyimage.com/30x30.png/cc0000/ffffff"
    }, {
      "id": "5",
      "name": "Puce",
      "sumary": "#f1aa58",
      "imagepath": "http://dummyimage.com/30x30.jpg/ff4444/ffffff"
    }, {
      "id": "6",
      "name": "Indigo",
      "sumary": "#943d3a",
      "imagepath": "http://dummyimage.com/30x30.jpg/5fa2dd/ffffff"
    }, {
      "id": "7",
      "name": "Red",
      "sumary": "#2400ca",
      "imagepath": "http://dummyimage.com/30x30.jpg/dddddd/000000"
    }];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    })
    await queryInterface.bulkInsert('Colors', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Colors', null, {});
  }
};
