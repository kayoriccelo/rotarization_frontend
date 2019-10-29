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
        containerElement: <div style={{ height: `calc(80vh - 180px)` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
        componentDidMount() {
            const DirectionsService = new google.maps.DirectionsService();

            this.setState({
                origin: this.props.origin,
                destination: this.props.distiny
            })

            DirectionsService.route({
                origin: new google.maps.LatLng(
                    this.props.origin.lat,
                    this.props.origin.lng
                ),
                destination: new google.maps.LatLng(
                    this.props.distiny.lat,
                    this.props.distiny.lng
                ),
                travelMode: google.maps.TravelMode.DRIVING,
                waypoints: []
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result,
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                };
            });
        },
        componentDidUpdate(prevProps, prevState) {
            if (prevProps.origin !== this.props.origin) {
                const DirectionsService = new google.maps.DirectionsService();

                DirectionsService.route({
                    origin: new google.maps.LatLng(
                        this.props.origin.lat,
                        this.props.origin.lng
                    ),
                    destination: new google.maps.LatLng(
                        this.props.distiny.lat,
                        this.props.distiny.lng
                    ),
                    travelMode: google.maps.TravelMode.DRIVING,
                    waypoints: []
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
        }
    })
)(props =>
    <GoogleMap
        defaultZoom={15}
        defaultCenter={props.center}
    >
        {props.directions && <DirectionsRenderer directions={props.directions} />}
        <TrafficLayer />
    </GoogleMap>
);

export default function DirectionMarkerMap(props) {
    const { center, origin, distiny } = props;

    const newCenter = !center.lat ? { lat: -3.71839, lng: -38.5434 } : center

    const newOrigin = !origin.lat ? { lat: -3.71839, lng: -38.5434 } : origin

    const newDistiny = !distiny.lat ? { lat: -3.71839, lng: -38.5434 } : distiny

    return (
        <MapWithADirectionsRenderer
            waypoints={props.waypoints}
            center={newCenter}
            origin={newOrigin}
            distiny={newDistiny}
        />
    );
};
