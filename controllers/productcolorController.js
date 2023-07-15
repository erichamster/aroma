let controller = {};
let models = require('../models');
let ProductColor = models.ProductColor;

controller.getAll = () => {
  return new Promise((resolve, reject) => {
    ProductColor
      .findAll({
        include: [{ model: models.Product }],
        attributes: ['id', 'name', 'sumary', 'imagepath']
      })
      .then(data => resolve(data))
      .catch(error => reject(new Error(error)));
  })
}

module.exports = controller