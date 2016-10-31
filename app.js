const dotEnv  = require('dotenv').config();

const express = require('express');
const session  = require('express-session');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');

const homeRoute   = require('./routes/home');
const searchRoute = require('./routes/searchNP');
const favRoute    = require('./routes/icon');
const usersRoute  = require('./routes/users');
const authRoute  = require('./routes/auth');

const app = express();
const SECRET  ='fortuneCookie'
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(cookieParser());

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SECRET
}));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(logger('dev'));

app.use('/', homeRoute);
app.use('/search', searchRoute);
app.use('/favorites', favRoute);
app.use('/auth', authRoute)
app.use('/users', usersRoute)

app.listen(port, () => console.log('Server started on port', port));
