/* global google */
import React from 'react';
import { compose, withProps, lifecycle } from "recompose";
import {
    withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer, TrafficLayer
} from "react-google-maps";

import key from '../key';


const MapWithADirectionsRenderer = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=" + key.apiKey + "&v=3.exp&libraries=geometry,drawing,places",
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
                origin: this.props.origin,
                destination: this.props.distiny,
                travelMode: google.maps.TravelMode.DRIVING,
                waypoints: [this.props.waypoints.map(item => {
                    return { location: `${item.latitude}, ${item.longitude}`, stopover: true }
                })]
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result,
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                };
            });
        }
    })
)(props =>
    <GoogleMap
        defaultZoom={7}
        defaultCenter={props.center}
    >
        {props.directions && <DirectionsRenderer directions={props.directions} />}
        <TrafficLayer />
    </GoogleMap>
);

export default function DirectionMarkerMap(props) {
    return (
        <MapWithADirectionsRenderer {...props} />
    );
};
