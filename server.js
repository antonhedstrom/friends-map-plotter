// Read environment variables from .env if available
require('dotenv').config();

const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');

const routes = require('./lib/routes');

const app = express();
// set the view engine to ejs
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: 'views/layouts/',
  partialsDir: 'views/partials/',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/www-public'));
app.use(morgan('dev'));

app.use(routes);

app.set('port', process.env.PORT ||  3003);

app.listen(app.get('port'), () => {
  console.log('Listening at ' + app.get('port'));
});
