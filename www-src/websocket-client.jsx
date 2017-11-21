import {
  w3cwebsocket as W3CWebSocket
} from 'websocket';

// if ( window.myToken) {
//   sessionStorage.setItem('token', window.myToken);
//   window.location = '/?token=' + window.myToken;
// }

class WebSocketCommunicator {
  constructor(options = {}) {
    this.socketName = options.name || 'map-plotter';
    const currentHost = options.host || window.location.host;

    this.client = new W3CWebSocket(`ws://${currentHost}/`, this.socketName);
    this.client.onerror = this.onError.bind(this);
    this.client.onopen = this.onOpen.bind(this);
    this.client.onclose = this.onClose.bind(this);
    this.client.onmessage = this.onMessage.bind(this);
  }
  onError() {
    console.log('Connection Error');
  }
  onOpen() {
    console.log('WebSocket Client Connected');

    function sendNumber() {
      if (this.client.readyState === this.client.OPEN) {
        var number = Math.round(Math.random() * 0xFFFFFF);
        this.client.send(number.toString());
        setTimeout(sendNumber.bind(this), 1000);
      }
    }
    setTimeout(sendNumber.bind(this), 0);
  }
  onClose() {
    console.log(this.socketName + ' Client Closed');
  }
  onMessage(e) {
    if (typeof e.data === 'string') {
      console.log("From server: '" + e.data + "'");
    }
  }
}

export default WebSocketCommunicator;
