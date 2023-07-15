let controller = {};
let models = require('../models');
let Comment = models.Comment;
let Sequelize = require('sequelize');
let Op = Sequelize.Op;

controller.add = (comment) => {
  return new Promise((resolve, reject) => {
    Comment
      .create(comment)
      .then(data => resolve(data))
      .catch(error => reject(new Error(error)));
  })
}

controller.getAll = () => {
  return new Promise((resolve, reject) => {
    Comment
      .findAll({
        include: [{ model: models.Product }],
        attributes: ['id', 'message']
      })
      .then(data => resolve(data))
      .catch(error => reject(new Error(error)));
  })
}

module.exports = controller