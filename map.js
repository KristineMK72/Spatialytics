var map = L.map('map').setView([44.95, -93.1], 4); // Centered on U.S. with zoom level 4

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Markers for project locations
L.marker([45.5571, -94.1624]).addTo(map) // St. Cloud, MN (Storm Chasing, Echoes of the Land)
    .bindPopup('Storm Chasing Website & Echoes of the Land')
    .on('mouseover', function (e) { this.openPopup(); })
    .on('mouseout', function (e) { this.closePopup(); });

L.marker([38.2462, 22.0748]).addTo(map) // Distomo, Greece (Distomo Resilience)
    .bindPopup('The Distomo Resilience Project')
    .on('mouseover', function (e) { this.openPopup(); })
    .on('mouseout', function (e) { this.closePopup(); });
