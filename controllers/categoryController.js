let controller = {};
let models = require('../models');
let Category = models.Category;
let Sequelize = require('sequelize');
let Op = Sequelize.Op;

controller.getAll = (query) => {
  return new Promise((resolve, reject) => {
    let options = {
      attributes: ['id', 'name', 'imagepath', 'sumary'],
      include: [{ 
        models: models.Product,
        where: {}
      }]
    }
    if (query && query.search != '') {
      options.include[0].where.name = {
        [Op.iLike]: `%${query.search}%`
      }
    }
    Category
      .findAll({
        attributes: ['id', 'name', 'imagepath', 'sumary'],
        include: [{ model: models.Product }],
      })
      .then(data => {
        resolve(data)
      })
      .catch(error => reject(new Error(error)));
  })
}

module.exports = controller