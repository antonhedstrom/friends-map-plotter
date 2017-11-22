import React from 'react';
import { connect } from 'react-redux';

import * as user from '../actions/user.actions';
import MapView from './map-view';
import WebsocketClient from '../websocket-client';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const communicator = new WebsocketClient();
  }
  componentDidMount() {
    this.intervalId = setInterval(this.props.updateMyPos, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (<MapView lat="58.3941411" lng="15.6143812" />);
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateMyPos: () => {
      user.updateMyPos(dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
