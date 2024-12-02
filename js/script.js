// Initialize Leaflet Map
var map = L.map('mapid').setView([51.505, -0.09], 13); // Center at example location

// Add Tile Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add Dummy Car Location Marker
var carMarker = L.marker([51.505, -0.09]).addTo(map).bindPopup("Car is here!").openPopup();
