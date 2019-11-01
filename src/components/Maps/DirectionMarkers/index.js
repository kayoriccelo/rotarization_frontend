/*global google*/
import React, { useState, useEffect } from 'react';
import { withProps } from "recompose";
import {
    withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer, TrafficLayer
} from "react-google-maps";

import key from '../key';


const DirectionMarkerMap = (props) => {
    const [directions, setDirections] = useState(null);
    const { center, origin, destiny, waypoints } = props;
    const newCenter = !center.lat ? { lat: -3.71839, lng: -38.5434 } : center;
    
    console.log(waypoints)
    
    useEffect(() => {
        const newOrigin = !origin.lat ? { lat: -3.71839, lng: -38.5434 } : origin;
        const newDistiny = !destiny.lat ? { lat: -3.71839, lng: -38.5434 } : destiny;
    
        const directionsService = new google.maps.DirectionsService();

        directionsService.route({
            origin: new google.maps.LatLng(newOrigin.lat, newOrigin.lng),
            destination: new google.maps.LatLng(newDistiny.lat, newDistiny.lng),
            travelMode: google.maps.TravelMode.DRIVING,
            waypoints: waypoints
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                setDirections(result);
            } else {
                console.error(`error fetching directions ${result}`);
            };
        });
    }, [origin, destiny, waypoints, setDirections]);

    return (
        directions && <GoogleMap
            defaultZoom={15}
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
