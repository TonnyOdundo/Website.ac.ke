// Initialize the map, centered on Mpesa Foundation Academy coordinates
const map = L.map('map').setView([-1.083, 37.076], 16); // Use actual coordinates for the academy

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Define key campus locations with coordinates
const locations = [
  {
    name: "Administration Building",
    coords: [-1.083, 37.076],
    description: "Main administration building for staff and student services."
  },
  {
    name: "Library",
    coords: [-1.084, 37.075],
    description: "Library for research and study."
  },
  {
    name: "Dormitories",
    coords: [-1.085, 37.077],
    description: "Student dormitories with housing facilities."
  },
  {
    name: "Cafeteria",
    coords: [-1.0835, 37.074],
    description: "Campus cafeteria for students and staff."
  },
  {
    name: "Sports Field",
    coords: [-1.082, 37.078],
    description: "Sports field for various athletic activities and events."
  }
];

// Loop through each location and add a marker with a popup
locations.forEach(location => {
  const marker = L.marker(location.coords).addTo(map);
  marker.bindPopup(`<b>${location.name}</b><br>${location.description}`).openPopup();
});

// Optional: Add a circle to highlight the main campus area
L.circle([-1.083, 37.076], {
  color: 'blue',
  fillColor: '#blue',
  fillOpacity: 0.2,
  radius: 200 // Adjust radius to cover the campus
}).addTo(map).bindPopup("Mpesa Foundation Academy Campus Area");
