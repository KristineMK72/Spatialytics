var map = L.map('map').setView([46.7296, -94.6859], 6); // Center on Minnesota
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

L.marker([45.5571, -94.1624]).addTo(map) // St. Cloud (Storm Chasing)
    .bindPopup('Storm Chasing Website - St. Cloud');
L.marker([44.9778, -93.2650]).addTo(map) // Minneapolis (Travel Agency)
    .bindPopup('Travel Agency Booking Site');
L.marker([46.7833, -92.1065]).addTo(map) // Duluth (Calendar App)
    .bindPopup('Marlene’s Calendar App');
L.marker([45.0087, -95.0456]).addTo(map) // Willmar (Wind Turbine)
    .bindPopup('Wind Turbine Checklist');
