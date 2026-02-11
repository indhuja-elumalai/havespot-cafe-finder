"use client";

import { GoogleMap, useJsApiLoader, AdvancedMarkerElement } from '@react-google-maps/api';
import { useCallback, useState } from 'react';

const containerStyle = {
    width: '100%',
    height: '100vh'
};

const center = {
    lat: 35.6681625,
    lng: 139.7007624
};

function MapCanvas() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDLJSzdR3M7Zw6lvGorYnz_N_h_AVwUwcw",
        // libraries: ['marker'] // Required for AdvancedMarkerElement
    });

    const [map, setMap] = useState(null);

    const onLoad = useCallback(function callback(mapInstance) {
        console.log("Havespot Engine: Fully Operational");
        setMap(mapInstance);
    }, []);

    const onUnmount = useCallback(function callback(mapInstance) {
        setMap(null);
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
                mapId: "103d3353caa555bed0bebe63", // Your ID
                tiltInteractionEnabled: true,
                headingInteractionEnabled: true,
                disableDefaultUI: true,
            }}
        >
            {/* Child components, such as markers, info windows, etc. */}
        </GoogleMap>
    ) : <div style={{ background: '#f8f9f8', height: '100vh' }} />;
}

export default MapCanvas;