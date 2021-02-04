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

function getColor(d) {
  if (d < 10)
    return "green";
  else if (d < 30)
    return "yellow";
  else if (d < 50)
    return "pink";
  else if (d < 70)
    return "blue";
  else if (d<90)
    return "orange";
  else
    return "red"
}

// Create a variable for the geojson
var queryURL =  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

//Create a function to get the infomration
d3.json(queryURL, function(data) {

  console.log(data);

  var features = data.features;

  for(var i=0; i<features.length; i++){
  var location = features[i].geometry.coordinates
  var magnitude = features[i].properties.mag
  console.log(location[2])

  if (location) {
    L.circle([location[1], location[0]],{
      fillOpacity: 0.75,
      color: "black",
      fillColor: getColor([location[2]]),
    // Adjust radius
    radius: magnitude * 20000
    }).addTo(myMap);
    };
  }

});

