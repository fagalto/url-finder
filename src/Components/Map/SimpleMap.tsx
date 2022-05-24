import React, { Component } from 'react';
import { GoogleMap, useGoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { gpsCoords } from '.';
import Pointer from './Pointer';
import { Marker } from "@react-google-maps/api";

import { Maps } from 'google-map-react';



const SimpleMap = (props: { coords?: gpsCoords[], zoom?: number }) => {
  const center = {
    lat: -3.745,
    lng: -38.523,
  };
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

    const defaultZoom = 5;

    const points = props.coords !== undefined ? props.coords : [center];
  const zoom = props.zoom !== undefined ? props.zoom : defaultZoom;
    const allPoints = points.map((point, i) => <Marker position={point} key={i} />);

    const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: "AIzaSyD - SbMR4NB0_MnA_Xh81NHWbuwj2ZnBzwM",
    });

    const [map, setMap] = React.useState <google.maps.Map>();

    const onLoad = React.useCallback(function callback(map: google.maps.Map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
      setMap(undefined);
    }, []);



    return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        onLoad={onLoad}
        zoom={zoom}
        onUnmount={onUnmount}>
        {allPoints}
      </GoogleMap>
    ) : (
      <></>
    );
}

export default SimpleMap;

