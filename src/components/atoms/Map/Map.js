import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import PropTypes from 'prop-types';
import './Map.scss';

export class MapContainer extends Component {
  render() {
    const { google, center } = this.props;

    return (
      <Map google={google} initialCenter={center} zoom={14} style={{ width: '100%', height: '500px', position: 'relative' }} className="mapstyle">
        <Marker onClick={this.onMarkerClick} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDBx8PZYnJ68ZoXMWB74wW_EXeJaZhvwv8',
})(MapContainer);

MapContainer.defaultProps = {
  google: {},
  center: {
    lat: 50.049683,
    lng: 19.944544,
  },
};

MapContainer.propTypes = {
  google: PropTypes.objectOf(PropTypes.object),
  center: PropTypes.objectOf(PropTypes.number),
};
