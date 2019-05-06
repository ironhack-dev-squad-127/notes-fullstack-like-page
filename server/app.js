require('dotenv').config();

const bodyParser   = require('body-parser');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const express      = require('express');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

mongoose
  .connect('mongodb://localhost/fullstack-like-page', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

app.use(cors({
  origin: (origin, cb) => {
    cb(null, origin && origin.startsWith('http://localhost:'))
  },
  optionsSuccessStatus: 200,
  credentials: true
}))

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Use all the routes defined in './routes/index' and prefix them by '/api'
app.use('/api', require('./routes/index'));


module.exports = app;
