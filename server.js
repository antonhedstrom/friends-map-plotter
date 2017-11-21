// Read environment variables from .env if available
require('dotenv').config();

const path = require('path');
const http = require('http');
const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');

const routes = require('./lib/routes');
const websocketServer = require('./websocket-server');

const app = express();
const server = http.createServer(app);

// set the view engine to ejs
app.engine('.hbs', exphbs({
  defaultLayout: 'app',
  layoutsDir: 'views/layouts/',
  partialsDir: 'views/partials/',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/www-public'));
app.use(morgan('dev'));

app.use(routes);

app.set('port', process.env.PORT || 3003);

server.listen(app.get('port'), () => {
  console.log('Listening at ' + app.get('port'));

  websocketServer(server);
});

