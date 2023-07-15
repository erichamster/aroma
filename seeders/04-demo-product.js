'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [{
      "id": "8",
      "name": "Coffee - Egg Nog Capuccino",
      "price": "1.00",
      "imagepath": "/img/product/product1.png",
      "thumbnailPath": "http://dummyimage.com/30x30.jpg/5fa2dd/ffffff",
      "availability": false,
      "sumary": "strategize front-end models",
      "description": "Malig neo retromolar",
      "overallReview": "1.5",
      "reviewCount": "3",
      "brandId": "1",
      "categoryId": "1"
    }, {
      "id": "9",
      "name": "Chambord Royal",
      "price": "2.00",
      "imagepath": "/img/product/product2.png",
      "thumbnailPath": "http://dummyimage.com/30x30.png/cc0000/ffffff",
      "availability": false,
      "sumary": "reinvent interactive architectures",
      "description": "Act lym leuk w rmsion",
      "overallReview": "1.6",
      "reviewCount": "2",
      "brandId": "2",
      "categoryId": "2"
    }, {
      "id": "10",
      "name": "Longan",
      "price": "3.00",
      "imagepath": "/img/product/product3.png",
      "thumbnailPath": "http://dummyimage.com/30x30.jpg/5fa2dd/ffffff",
      "availability": true,
      "sumary": "harness dynamic applications",
      "description": "Hemophagocytic syndromes",
      "overallReview": "1.7",
      "reviewCount": "3",
      "brandId": "3",
      "categoryId": "3"
    }, {
      "id": "11",
      "name": "Cleaner - Bleach",
      "price": "40.00",
      "imagepath": "/img/product/product4.png",
      "thumbnailPath": "http://dummyimage.com/30x30.jpg/5fa2dd/ffffff",
      "availability": true,
      "sumary": "optimize collaborative web services",
      "description": "Non-abo incomp/delay HTR",
      "overallReview": "1.6",
      "reviewCount": "2",
      "brandId": "4",
      "categoryId": "4"
    }, {
      "id": "12",
      "name": "Oil - Truffle, Black",
      "price": "50.00",
      "imagepath": "/img/product/product5.png",
      "thumbnailPath": "http://dummyimage.com/30x30.jpg/cc0000/ffffff",
      "availability": false,
      "sumary": "brand ubiquitous e-markets",
      "description": "Ac stomac ulc w hem/perf",
      "overallReview": "1.6",
      "reviewCount": "2",
      "brandId": "5",
      "categoryId": "5"
    }, {
      "id": "13",
      "name": "Wine - Zinfandel Rosenblum",
      "price": "60.00",
      "imagepath": "/img/product/product6.png",
      "thumbnailPath": "http://dummyimage.com/30x30.jpg/ff4444/ffffff",
      "availability": false,
      "sumary": "transition killer relationships",
      "description": "Adv eff vitamin k",
      "overallReview": "1.6",
      "reviewCount": "2",
      "brandId": "6",
      "categoryId": "6"
    }, {
      "id": "14",
      "name": "Mousse - Mango",
      "price": "70.00",
      "imagepath": "/img/product/product7.png",
      "thumbnailPath": "http://dummyimage.com/30x30.png/5fa2dd/ffffff",
      "availability": false,
      "sumary": "optimize 24/7 technologies",
      "description": "Glaucoma w iris anomaly",
      "overallReview": "1.6",
      "reviewCount": "2",
      "brandId": "7",
      "categoryId": "7"
    }];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    })
    await queryInterface.bulkInsert('Products', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
