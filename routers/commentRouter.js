let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');

router.post('/', userController.isLoggedIn, (req, res, next) => {
  let controller = require('../controllers/commentController');
  let comment = {
    userId: req.session.use.id,
    productId: req.body.productId,
    message: req.body.message
  }
  if(!isNaN(req.body.parentCommentId) && (req.body.parentCommentId != '')) {
    comment.parentCommentId = req.body.parentCommentId;
  }
  controller
    .add(comment)
    .then(data => {
      res.redirect('/products/' + data.productId);
    })
    .catch(error => next(error));
});

router.put('/', (req, res, next) => {
  var productId = req.body.id;
  var quantity = parseInt(req.body.quantity);
  var cartItem = req.session.cart.update(productId, quantity);
  res.json(cartItem);
});

router.delete('/', (req, res) => {
  var productId = req.body.id;
  req.session.cart.remove(productId);
  res.json({
    totalQuantity: req.session.cart.totalQuantity,
    totalPrice: req.session.cart.totalPrice
  })
});

router.delete('/all', (req, res) => {
  req.session.cart.empty();
  res.sendStatus(204);
  res.end();
});


module.exports = router;