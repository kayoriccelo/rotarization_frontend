/* global google */
import React from 'react';
import _ from 'lodash';
import { compose, withProps, lifecycle } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { SearchBox } from 'react-google-maps/lib/components/places/SearchBox';


// const chave = 'AIzaSyBPzDv2LqJDpi25hygHnhPwErwdNqM2RmY'

const MapWithASearchBox = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBPzDv2LqJDpi25hygHnhPwErwdNqM2RmY&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `calc(50vh - 100px)` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    lifecycle({
        componentWillMount() {
            const refs = {}

            this.setState({
                searchValue: null,
                bounds: null,
                centerMap: this.props.center,
                onMapMounted: ref => {
                    refs.map = ref;
                },
                onSearchBoxMounted: ref => {
                    refs.searchBox = ref;
                },
                onPlacesChanged: () => {
                    const places = refs.searchBox.getPlaces();

                    const nextMarkers = places.map(place => ({
                        position: place.geometry.location,
                    }));

                    const nextCenter = _.get(nextMarkers, '0.position', this.state.centerMap);

                    this.setState({
                        centerMap: nextCenter,
                        markers: nextMarkers,
                    });

                    this.props.handleLatitude(nextMarkers[0].position.lat());
                    this.props.handleLongitude(nextMarkers[0].position.lng());
                    this.props.handleAddress(places[0].formatted_address);
                },
                setNewPosition: marker => {
                    this.setState({
                        markers: [{ position: { lat: marker.latLng.lat(), lng: marker.latLng.lng() } }],
                    });

                    this.props.handleLatitude(marker.latLng.lat());
                    this.props.handleLongitude(marker.latLng.lng());
                },
            })
        },
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        ref={props.onMapMounted}
        defaultZoom={15}
        center={props.centerMap}
    >
        <SearchBox
            ref={props.onSearchBoxMounted}
            bounds={props.bounds}
            controlPosition={google.maps.ControlPosition.TOP_CENTER}
            onPlacesChanged={props.onPlacesChanged}
        >
            <input
                type="text"
                placeholder="Digite o endereço."
                style={{
                    boxSizing: `border-box`,
                    border: `1px solid transparent`,
                    width: `400px`,
                    height: `32px`,
                    marginTop: `27px`,
                    padding: `0 12px`,
                    borderRadius: `3px`,
                    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                    fontSize: `14px`,
                    outline: `none`,
                    textOverflow: `ellipses`,
                }}
            />

        </SearchBox>

        {props.markers.map((marker, index) =>
            <Marker
                key={index}
                position={marker.position}
            // draggable={true}
            // animation={google.maps.Animation.DROP}
            // onDragEnd={value => props.setNewPosition(value)}
            />
        )}
    </GoogleMap>
);

export default function SearchMarkerMap(props) {
    const { handleLatitude, handleLongitude, handleAddress, values } = props;

    const markers = !values.latitude ? [] : [{
        position: {
            lat: parseFloat(values.latitude),
            lng: parseFloat(values.longitude)
        }
    }];

    const center = !values.latitude ? {lat: -3.71839, lng: -38.5434 } : {
        lat: parseFloat(values.latitude),
        lng: parseFloat(values.longitude)
    };

    return (
        <MapWithASearchBox
            markers={markers}
            center={center}
            handleLatitude={handleLatitude}
            handleLongitude={handleLongitude}
            handleAddress={handleAddress}
        />
    );
};
