"use client";

import { useCallback, useRef } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useStore } from '@/lib/store';

export default function MapCanvas() {
    const {
        mapCenter,
        mapZoom,
        setMapCenter,
        setMapZoom,
        setMapIdle
    } = useStore();

    // Use a ref to store the initial values so they don't change on re-render
    const initialCenter = useRef(mapCenter);
    const initialZoom = useRef(mapZoom);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    const onLoad = useCallback((mapInstance) => {
        // We capture everything in 'idle' for better performance
        // This fires once after any movement (drag or zoom) finishes
        mapInstance.addListener('idle', () => {
            const newCenter = mapInstance.getCenter().toJSON();
            const newZoom = mapInstance.getZoom();

            setMapCenter(newCenter);
            setMapZoom(newZoom);
            setMapIdle(true);

            console.log("😴 Map Idle: Store Synced", { newCenter, newZoom });
        });

        mapInstance.addListener('dragstart', () => {
            setMapIdle(false);
            console.log("🏃 Map moving...");
        });

    }, [setMapCenter, setMapZoom, setMapIdle]);

    if (!isLoaded) return <div className="h-screen bg-[#f8f9f8]" />;

    return (
        <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100vh' }}
            // Use refs for the initial state to prevent the "fighting" loop
            center={initialCenter.current}
            zoom={initialZoom.current}
            onLoad={onLoad}
            options={{
                mapId: process.env.NEXT_PUBLIC_MAP_ID,
                disableDefaultUI: true,
                gestureHandling: "greedy", // Improves responsiveness
            }}
        />
    );
}