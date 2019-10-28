/* global google */
import React from 'react';

const chave = 'AIzaSyBPzDv2LqJDpi25hygHnhPwErwdNqM2RmY'

const { compose, withProps, lifecycle } = require("recompose");
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer,
    Marker
} = require("react-google-maps");

const MapWithADirectionsRenderer = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBPzDv2LqJDpi25hygHnhPwErwdNqM2RmY&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
        componentDidMount() {
            const DirectionsService = new google.maps.DirectionsService();

            DirectionsService.route({
                origin: new google.maps.LatLng(-3.8217147, -38.5125515),
                destination: new google.maps.LatLng(-3.7771465, -38.5671367),
                travelMode: google.maps.TravelMode.DRIVING,
                waypoints: [
                    {
                        location: 'Passaré, Fortaleza, CE',
                        stopover: true
                    }, {
                        location: 'Serrinha, Fortaleza, CE',
                        stopover: true
                    }],
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result,
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            });
        }
    })
)(props =>
    <GoogleMap
        defaultZoom={7}
        defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
    >
        {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
);

export default function Maps() {
    return (

        <MapWithADirectionsRenderer />
    )
}