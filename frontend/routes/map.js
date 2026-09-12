const map = L.map('map').setView([55.9446912, -3.1875151], 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const eventMarker = L.marker([55.9446912, -3.1875151]).addTo(map);
eventMarker.bindPopup("<b>AdaHack 2026</b><br>Find us in the informatics forum!").openPopup();
