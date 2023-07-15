'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [{
      "message": "orchestrate rich paradigms",
      "userId": 1,
      "productId": 8,
      "parentCommentId": 1
    }, {
      "message": "deploy cross-media web services",
      "userId": 1,
      "productId": 8,
      "parentCommentId": 2
    }, {
      "message": "reintermediate 24/365 e-services",
      "userId": 1,
      "productId": 8,
      "parentCommentId": 3
    }, {
      "message": "synthesize user-centric niches",
      "userId": 1,
      "productId": 8,
      "parentCommentId": 4
    }, {
      "message": "streamline transparent mindshare",
      "userId": 1,
      "productId": 8,
      "parentCommentId": 5
    }, {
      "message": "grow scalable schemas",
      "userId": 1,
      "productId": 8,
      "parentCommentId": 6
    }, {
      "message": "implement strategic web-readiness",
      "userId": 1,
      "productId": 8,
      "parentCommentId": 7
    }];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    })
    await queryInterface.bulkInsert('Comments', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
