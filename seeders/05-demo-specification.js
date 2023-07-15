'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [{
      "id": "1",
      "name": "Horror",
      "sumary": 0.4311916531
    }, {
      "id": "2",
      "name": "Comedy|Drama",
      "sumary": 2.6928489106
    }, {
      "id": "3",
      "name": "Comedy|Drama",
      "sumary": 0.3416038212
    }, {
      "id": "4",
      "name": "Action|Animation|Children|Sci-Fi",
      "sumary": 0.2477324421
    }, {
      "id": "5",
      "name": "Action|Crime|Thriller",
      "sumary": 0.6011072867
    }, {
      "id": "6",
      "name": "Comedy|Drama|War",
      "sumary": 0.293587306
    }, {
      "id": "7",
      "name": "Action|Adventure|Children|Fantasy",
      "sumary": 0.8745322642
    }];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    })
    await queryInterface.bulkInsert('Specifications', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Specifications', null, {});
  }
};
