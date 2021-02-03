// Create a map object
var myMap = L.map("mapid", {
  center: [35.222, -101.8313],
  zoom: 5
});

// Add a light tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/light-v10",
  accessToken: API_KEY
}).addTo(myMap);


// Create a variable for the geojson
var queryURL =  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

//Create a function to get the infomration
d3.json(queryURL, function(data) {

  console.log(data);

  var features = data.features;

  for(var i=0; i<features.length; i++){
  var location = features[i].geometry.coordinates
  var magnitude = features[i].properties.mag


  if (location) {
    L.marker([location[1], location[0]]).addTo(myMap);
    };
  }

});

