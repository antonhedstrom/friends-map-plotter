// Read environment variables from .env if available
require('dotenv').config();

const express = require('express');
const exphbs = require('express-handlebars');
const websocket = require('websocket');
const morgan = require('morgan');
const path = require('path');

const routes = require('./lib/routes');

const app = express();
const WebSocketServer = websocket.server;
const wsServer = new WebSocketServer({
  httpServer: app
});

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

app.set('port', process.env.PORT ||  3003);

app.listen(app.get('port'), () => {
  console.log('Listening at ' + app.get('port'));

  wsServer.on('request', function(request) {
    var connection = request.accept(null, request.origin);

    // This is the most important callback for us, we'll handle
    // all messages from users here.
    connection.on('message', function(message) {
      if (message.type === 'utf8') {
        // process WebSocket message
      }
    });

    connection.on('close', function(connection) {
      // close user connection
    });
  });
});
