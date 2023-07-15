let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');

router.post('/', userController.isLoggedIn, (req, res, next) => {
  let reviewController = require('../controllers/reviewController');
  let review = {
    userId: req.session.user.id,
    productId: req.body.productId,
    rating: req.body.rating,
    message: req.body.message
  }
  reviewController
    .add(review)
    .then(() => {
      res.redirect('/products/' + review.productId);
    })
    .catch(error => next(error));
});

module.exports = router;