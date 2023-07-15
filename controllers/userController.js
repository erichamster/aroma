let controller = {};
let models = require('../models');
let User = models.User;
let bcrypt = require('bcryptjs');

controller.getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    User
      .findOne({
        where: { username: email }
      })
      .then(data => resolve(data))
      .catch(error => reject(new Error(error)));
  })
}

controller.createUser = (user) => {
  var salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(user.password, salt);
  return new Promise((resolve, reject) => {
    User
      .create(user)
      .then(data => resolve(data))
      .catch(error => reject(new Error(error)));
  })
}

controller.comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
}

controller.isLoggedIn = (req, res, next) => {
  if(req.session.user) {
    next();
  } else {
    res.redirect(`/user/login?returnURL=${req.originalUrl}`)
  }
}

module.exports = controller