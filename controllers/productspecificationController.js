let controller = {};
let models = require('../models');
let ProductSpecification = models.ProductSpecification;

controller.getAll = () => {
  return new Promise((resolve, reject) => {
    ProductSpecification
      .findAll({
        include: [{ model: models.Product }],
        attributes: ['id', 'name', 'sumary']
      })
      .then(data => resolve(data))
      .catch(error => reject(new Error(error)));
  })
}

module.exports = controller