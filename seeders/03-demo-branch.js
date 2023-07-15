'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [{
      "id": "1",
      "name": "Bisacodyl",
      "sumary": "synthesize B2C e-services",
      "imagepath": "http://dummyimage.com/30x30.png/dddddd/000000"
    }, {
      "id": "2",
      "name": "Epsom Salts",
      "sumary": "orchestrate impactful infomediaries",
      "imagepath": "http://dummyimage.com/30x30.jpg/dddddd/000000"
    }, {
      "id": "3",
      "name": "Arnica Aurum 6/10",
      "sumary": "seize out-of-the-box deliverables",
      "imagepath": "http://dummyimage.com/30x30.bmp/ff4444/ffffff"
    }, {
      "id": "4",
      "name": "Ketorolac Tromethamine",
      "sumary": "exploit B2B e-commerce",
      "imagepath": "http://dummyimage.com/30x30.bmp/dddddd/000000"
    }, {
      "id": "5",
      "name": "Sleep Aid",
      "sumary": "implement integrated schemas",
      "imagepath": "http://dummyimage.com/30x30.png/5fa2dd/ffffff"
    }, {
      "id": "6",
      "name": "L OCCITANE SUBLIME BEAUTY BB LIGHT SPF 30 Broad Spectrum Sunscreen",
      "sumary": "unleash intuitive infrastructures",
      "imagepath": "http://dummyimage.com/30x30.bmp/ff4444/ffffff"
    }, {
      "id": "7",
      "name": "Bryophyllum Avena Tension Relief",
      "sumary": "implement e-business e-business",
      "imagepath": "http://dummyimage.com/30x30.jpg/5fa2dd/ffffff"
    }];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    })
    await queryInterface.bulkInsert('Brands', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Brands', null, {});
  }
};
