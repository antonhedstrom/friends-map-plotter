import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

@connect((store) => {
  return {
    myPos: store.user.pos
  }
})
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
  }
  render() {
    return (<div className="google-maps-view">
      {this.state.loading && 'Loading...'}
      <GoogleMap
        defaultZoom={8}
        center={this.state.center}
      >
        {/* {this.state.devicePosLoaded &&
          <Marker position={{
            lat: this.state.devicePos.lat,
            lng: this.state.devicePos.lng
          }} />
        } */}
        {this.props.myPos &&
          <Marker position={{
            lat: this.props.myPos.lat,
            lng: this.props.myPos.lng
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
