'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [{
      "name": "Pink",
      "sumary": "#56bb3f",
      "imagepath": "http://dummyimage.com/30x30.jpg/ff4444/ffffff",
      "colorId": 1,
      "productId": 8
    }, {
      "name": "Fuscia",
      "sumary": "#00c01c",
      "imagepath": "http://dummyimage.com/30x30.bmp/5fa2dd/ffffff",
      "colorId": 1,
      "productId": 9
    }, {
      "name": "Blue",
      "sumary": "#63eeec",
      "imagepath": "http://dummyimage.com/30x30.bmp/ff4444/ffffff",
      "colorId": 1,
      "productId": 10
    }, {
      "name": "Blue",
      "sumary": "#9e1be1",
      "imagepath": "http://dummyimage.com/30x30.jpg/ff4444/ffffff",
      "colorId": 1,
      "productId": 11
    }, {
      "name": "Pink",
      "sumary": "#b7cf68",
      "imagepath": "http://dummyimage.com/30x30.png/cc0000/ffffff",
      "colorId": 1,
      "productId": 12
    }, {
      "name": "Puce",
      "sumary": "#601ce1",
      "imagepath": "http://dummyimage.com/30x30.jpg/5fa2dd/ffffff",
      "colorId": 1,
      "productId": 13
    }, {
      "name": "Orange",
      "sumary": "#b7a011",
      "imagepath": "http://dummyimage.com/30x30.jpg/cc0000/ffffff",
      "colorId": 1,
      "productId": 14
    }];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    })
    await queryInterface.bulkInsert('ProductColors', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProductColors', null, {});
  }
};
