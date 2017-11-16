import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

import geo from './geolocation';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devicePos: {},
      center: {
        lat: props.lat,
        lng: props.lng,
      },
      devicePosLoaded: false
    };
  }
  componentWillMount() {
    geo().then(pos => {
      this.setState({
        devicePos: pos,
        devicePosLoaded: true
      });
      setInterval(() => {
        const pos = this.state.devicePos;
        pos.lng += Math.random() - 0.5;
        pos.lat += Math.random() - 0.5;
        this.setState({
          devicePos: pos
        });
      }, 1000);
    });
  }
  render() {
    return (<div className="google-maps-view">
      {this.state.loading && 'Loading...'}
      <GoogleMap
        defaultZoom={8}
        center={this.state.center}
      >
        {this.state.devicePosLoaded &&
          <Marker position={{
            lat: this.state.devicePos.lat,
            lng: this.state.devicePos.lng
          }} />
        }
      </GoogleMap>
    </div>);
  }
}

MapView.defaultProps = {
  lat: 58.394121,
  lng: 15.6143959
};

MapView.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number
};

export default compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyB8CeRvvU9dHTDSlonMYGBt-0cXfOqMShM&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <MapView />
);
