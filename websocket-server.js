
const websocket = require('websocket');
const WebSocketServer = websocket.server;

let wsServer;

module.exports = function(httpServer) {
  if ( !wsServer ) {
    if (!httpServer ) {
      throw new Error('Websocket server not initialized');
    }

    wsServer = new WebSocketServer({
      httpServer,
      autoAcceptConnections: false
    });
    startListen(httpServer, wsServer);
  }

  return wsServer;
};

function startListen(httpServer, wsServer) {
  httpServer.on('upgrade', (req, socket, upgradeHead) => {
    if (req.headers.upgrade !== 'websocket') {
      // close or return?
    }
    // handle the websocket connection
  })

  function originIsAllowed(origin) {
    // put logic here to detect whether the specified origin is allowed.
    return true;
  }

  wsServer.on('connect', connection => {
    console.log('New connection!');
  });

  wsServer.on('close', (connection, closeReason, description) => {
    console.log('A connection was closed. ', connection, closeReason, description);
  });

  wsServer.on('request', function(request) {
    if ( !originIsAllowed(request.origin) ) {
      // Make sure we only accept requests from an allowed origin
      request.reject();
      console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
      return;
    }

    var connection = request.accept('map-plotter', request.origin);
    console.log((new Date()) + ' Connection accepted.');
    connection.on('message', function(message) {
      if (message.type === 'utf8') {
        console.log('Received Message: ' + message.utf8Data);
        connection.sendUTF(message.utf8Data);
      }
      else if (message.type === 'binary') {
        console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
        connection.sendBytes(message.binaryData);
      }
    });
    connection.on('close', function(reasonCode, description) {
      console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
  });
}
