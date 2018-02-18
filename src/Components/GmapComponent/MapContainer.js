import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  }

  render() {
    return (
      <Map
        google={this.props.google}
        style={style}
        zoom={15}
        initialCenter={{
          lat: 3.885441,
          lng: 11.514515,
        }}
        onClick={this.onMapClicked}
      >
        <Marker
          onClick={this.onMarkerClick}
          name="Current location"
          desc={"Marker's sample description"}
          position={{ lat: 3.885441, lng: 11.51451 }}
          icon={
            {
              /* url: "../../assets/marker.png",
                anchor: new google.maps.Point(32,32),
                scaledSize: new google.maps.Size(64,64) */
            }
          }
        />

        <InfoWindow
          onClose={this.onInfoWindowClose}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h2>{this.state.selectedPlace.name}</h2>
            <p>{this.state.selectedPlace.desc}</p>
            <p>
              <small>
                Provided by <b>Foursquare API</b> Services
              </small>
            </p>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCD7Cv9p0lYKiJ0pSxKPmxPU2G_zS-FX2Y',
})(MapContainer);

const style = {
  width: '100%',
  height: '92%',
};
