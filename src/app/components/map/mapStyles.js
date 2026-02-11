export const minimalStyle = [
    { featureType: "all", elementType: "labels.text.fill", stylers: [{ color: "#174D38" }] },
    { featureType: "poi", elementType: "all", stylers: [{ visibility: "off" }] },
    { featureType: "transit", elementType: "all", stylers: [{ visibility: "off" }] },
    { featureType: "road", elementType: "geometry", stylers: [{ color: "#EAEAEA" }] },
    { featureType: "road", elementType: "labels.text.stroke", stylers: [{ visibility: "off" }] },
    { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#FDFBD4" }] }, // Matches your bg-core
    { featureType: "water", elementType: "geometry", stylers: [{ color: "#C0D6DF" }] },
    { featureType: "administrative", elementType: "labels.text.fill", stylers: [{ color: "#174D38" }] }
];