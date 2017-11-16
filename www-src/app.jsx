import React from 'react';
import ReactDOM from 'react-dom';

import MapView from './map-view';

// if ( window.myToken) {
//   sessionStorage.setItem('token', window.myToken);
//   window.location = '/?token=' + window.myToken;
// }

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
  }
  render() {
    return (<MapView lat="58.3941411" lng="15.6143812" />);
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
