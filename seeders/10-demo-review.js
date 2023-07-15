'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data =[{
      "message": "reintermediate extensible vortals",
      "rating": 3,
      "productId": "8",
      "userId": "1"
    }, {
      "message": "drive real-time technologies",
      "rating": 1,
      "productId": 9,
      "userId": 1
    }, {
      "message": "leverage bleeding-edge infrastructures",
      "rating": 2,
      "productId": 10,
      "userId": 1
    }, {
      "message": "incentivize e-business partnerships",
      "rating": 3,
      "productId": 11,
      "userId": 1
    }, {
      "message": "incubate robust eyeballs",
      "rating": 4,
      "productId": 12,
      "userId": 1
    }, {
      "message": "whiteboard customized content",
      "rating": 1,
      "productId": 13,
      "userId": 1
    }, {
      "message": "transform open-source architectures",
      "rating": 4,
      "productId": 14,
      "userId": 1
    }];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    })
    await queryInterface.bulkInsert('Reviews', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
