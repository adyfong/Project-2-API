require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const homeRoute =require('./routes/home');
const searchRoute = require('./routes/searchNP');
const favRoute = require('./routes/icon');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(logger('dev'));

app.use('/', homeRoute);
app.use('/search', searchRoute);
app.use('/favorites', favRoute);


app.listen(port, () => console.log('Server started on port', port));
