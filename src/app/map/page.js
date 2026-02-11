"use client";
// Change from "@/components/map/MapCanvas" to:
import MapCanvas from "../components/map/MapCanvas";

export default function MapPage() {
    return (
        <main style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 10 }}>
                <h1 style={{ fontSize: '1.5rem', textTransform: 'lowercase' }}>havespot. explorer</h1>
            </div>

            <MapCanvas />
        </main>
    );
}