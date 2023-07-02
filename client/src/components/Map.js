import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = () => {
    // Set your initial map center and zoom level
    const position = [51.505, -0.09];
    const zoom = 13;

    const handleMapClick = (event) => {
        const { lat, lng } = event.latlng;
        alert(`You clicked at latitude: ${lat} and longitude: ${lng}`);
        // Here you can dispatch an action to save the clicked location
    };

    return (
        <MapContainer center={position} zoom={zoom} style={{ height: "100vh", width: "100%" }} onClick={handleMapClick}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>
                    A sample marker popup.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;
