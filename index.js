let express = require("express");
let app = express();
let expressHbs = require("express-handlebars");
let Handlebars = require('handlebars');
let { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

app.use(express.static(__dirname + '/public'));
let helper = require('./controllers/helper');
let paginateHelper = require('express-handlebars-paginate');
let hbs = expressHbs.create({
  extname: 'hbs',
  defaultLayout: 'layout',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/',
  handlebars: allowInsecurePrototypeAccess(Handlebars),
  helpers: {
    createStarList: helper.createStarList,
    createStars: helper.createStars,
    createPagination: paginateHelper.createPagination
  }
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// Use Body Parser
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use Cookie Parser
let cookieParser = require('cookie-parser');
app.use(cookieParser());

// Use Session
let session = require('express-session');
app.use(session({
  cookie: { httpOnly: true, maxAge: null },
  secret: 'S3cret',
  resave: false,
  saveUninitialized: false
}));

// Use Cart Controller
let Cart = require('./controllers/cartController');
app.use((req, res, next) => {
 var cart = new Cart(req.session.cart ? req.session.cart : {});
 req.session.cart = cart;
 res.locals.totalQuantity = cart.totalQuantity;

 res.locals.fullname = req.session.user ? req.session.user.fullname : '';
 res.locals.isLoggedIn = req.session.user ? true : false;
 next();
})

// Define routers here
// / => index
// /products => category
// /products/:id => single-product 

// app.get('/', (req, res) => {
//   res.render('index')
// });

// Luồng xử lý: index.js => router.js/..Router.js => controllers/..Controller.js
app.use('/', require('./routers/indexRouter'));
app.use('/products', require('./routers/productRouter'));
app.use('/cart', require('./routers/cartRouter'));
app.use('/comments', require('./routers/commentRouter'));
app.use('/reviews', require('./routers/reviewRouter'));
app.use('/users', require('./routers/userRouter'));

app.get('/sync', (req, res) => {
  let models = require('./models');
  models.sequelize.sync()
    .then(() => {
      res.send('Database sync complete!')
    })
});

app.get('/drop', (req, res) => {
  let models = require('./models');
  models.sequelize.drop()
    .then(() => {
      res.send('Database drop complete!')
    })
});

app.get('/:page', (req, res) => {
  let banners = {
    blog: "Our Blog",
    cart: "Shopping Cart",
    category: "Shop Category",
    checkout: "Product Checkout",
    confirmation: "Order Confirmation",
    contact: "Contact Us",
    login: "Login / Register",
    register: "Register",
    "single-blog": "Blog Details",
    "single-product": "Shop Single",
    "tracking-order": "Order Tracking",
    "products": "Shop Products",
  };
  let page = req.params.page;
  res.render(page, { banner: banners[page] })
});

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
  console.log(`Server is running at port ${app.get('port')}`);
});