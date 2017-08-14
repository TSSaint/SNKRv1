// import all methods

 const express = require('express');
 const logger = require('morgan');
 const path = require('path');
 const bodyParser = require('body-parser');
 const methodOverride = require('method-override');
 const cookieParser = require('cookie-parser');
 const session = require('express-session');
 const passport = require('passport');

 // initializes the app, as always
 const app = express();
 // includes the dotenv files
 require('dotenv').config();

 //put the node modules in use method on the express app
 app.use(logger('dev'));
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: false}));
 app.use(methodOverride('_method'));
 app.use(cookieParser());
 app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
 }));
 app.use(passport.initialize());
 app.use(passport.session());

 // static "stuff"
  app.use(express.static('public'));

 	


// app.use(express.static(__dirname + '../public'));

 // sets up our views
 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'ejs');

 // sets our port
 const port = process.env.PORT || 3000;
 app.listen(port, () => {
     console.log(`ON PORT: ${port}`);
 });

 // index route
 app.get('/', (req, res) => {
     res.render('index', {
         message: 'Hello World!',
         currentPage: 'Home',
         documentTitle: 'sneakerbase',
         subTitle: 'Sneakers go on your feet.',
     });
 });

 // require shoe routes
 const shoeRoutes = require('./routes/shoe-routes');
 app.use('/shoes', shoeRoutes);

 // requiring authentication routes here
 const authRoutes = require('./routes/auth-routes');
 app.use('/auth', authRoutes);
 const userRoutes = require('./routes/user-routes');
 app.use('/user', userRoutes);

// catch everything else as a mistake - Error Handleer
//  app.get('*', (req, res) => {
//      res.status(404).send('not found!');
//  })

 app.get('*', (req, res) => {
     res.render('404', {
         currentPage: 'Home',
    });
 })

//  app.get('*', (req, res) => {
//      res.render('index', {
//          message: 'Hello World!',
//          currentPage: 'Home',
//          documentTitle: 'sneakerbase',
//          subTitle: 'Footwear is life.',
//     });
//  })
