let controller = {};
let models = require('../models');
let Specification = models.Specification;

controller.getAll = () => {
  return new Promise((resolve, reject) => {
    Specification
      .findAll({
        include: [{ model: models.ProductSpecification }],
        attributes: ['id', 'name', 'sumary']
      })
      .then(data => resolve(data))
      .catch(error => reject(new Error(error)));
  })
}

module.exports = controller