/*global google*/
import React, { useState, useEffect } from 'react';
import { withProps } from "recompose";
import {
    withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer, TrafficLayer
} from "react-google-maps";

import key from '../key';


const DirectionMarkerMap = (props) => {
    const [directions, setDirections] = useState(null);
    const newCenter = !props.center.lat ? { lat: -3.71839, lng: -38.5434 } : props.center;
        
    useEffect(() => {
        const newOrigin = !props.origin.lat ? { lat: -3.71839, lng: -38.5434 } : props.origin;
        const newDistiny = !props.destiny.lat ? { lat: -3.71839, lng: -38.5434 } : props.destiny;
    
        const directionsService = new google.maps.DirectionsService();

        directionsService.route({
            origin: new google.maps.LatLng(newOrigin.lat, newOrigin.lng),
            destination: new google.maps.LatLng(newDistiny.lat, newDistiny.lng),
            travelMode: google.maps.TravelMode.DRIVING,
            waypoints: props.waypoints
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                setDirections(result);
            } else {
                console.error(`error fetching directions ${result}`);
            };
        });
    }, [props]);

    return (
        directions && <GoogleMap
            defaultZoom={8}
            defaultCenter={newCenter}
        >
            <DirectionsRenderer directions={directions} />
            <TrafficLayer />
        </GoogleMap>
    );
};

export default withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=" + key.apiKey + "&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
})(withScriptjs(withGoogleMap(DirectionMarkerMap)));
