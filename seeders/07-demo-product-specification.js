'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [{
      "description": "Postdysenteric arthropathy, right ankle and foot",
      "productId": 8,
      "specificationId": 1
    }, {
      "description": "Non-celiac gluten sensitivity",
      "productId": 8,
      "specificationId": 1
    }, {
      "description": "Pnctr w fb of r frnt wl of thorax w penet thoracic cavity",
      "productId": 8,
      "specificationId": 1
    }, {
      "description": "Unspecified injury of rectum",
      "productId": 8,
      "specificationId": 1
    }, {
      "description": "Other mechanical complication of unspecified vascular grafts",
      "productId": 8,
      "specificationId": 1
    }, {
      "description": "Fx unsp prt of nk of unsp femr, 7thE",
      "productId": 8,
      "specificationId": 1
    }, {
      "description": "Advrs effect of antimalari/drugs acting on bld protzoa, subs",
      "productId": 8,
      "specificationId": 1
    }];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    })
    await queryInterface.bulkInsert('ProductSpecifications', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProductSpecifications', null, {});
  }
};
