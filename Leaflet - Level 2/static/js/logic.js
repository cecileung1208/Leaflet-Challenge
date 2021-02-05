
// Add a light tile layer and adding it to myMap

var lightMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/light-v10",
  accessToken: API_KEY
})

var satelliteMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/satellite-v9",
  accessToken: API_KEY
});

var outdoorsMap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "outdoors-v11",
  accessToken: API_KEY
});

// Create a baseMaps object
var baseMaps = {
  "Satellite": satelliteMap,
  "Grayscale": lightMap,
  "Outdoors": outdoorsMap
};

// Create an overlay object
// var overlayMaps ={
//   "Earthquakes": geoLayer,
// };

// Create a map object
var myMap = L.map("mapid", {
  center: [35.222, -101.8313],
  zoom: 5,
  layers: [satelliteMap]
});



L.control.layers(baseMaps).addTo(myMap);



// Create a variable for the geojson url
var queryURL =  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


// Retrieve data from the query url
d3.json(queryURL, function(json) {


// Use geoJson to set conditions based on the json data
  geoLayer = L.geoJson(json, {

    // Set function to retrieve depth data
    style: function(feature) {

      // Set variable for depth to locate where the data is 
      var depth = feature.geometry.coordinates[2];

      // Conditional Statement for color scale vs depth
      // For high depth, circles will be red and low depth, circles will be green
      if (depth >= 90.0) {
        return {
          fillColor: "#FF3333",
        }; 
      }
      else if (depth > 70.0) {
        return {
          fillColor: "#FF9966"
        };
      } else if (depth > 50) {
          return {
          fillColor: "#FF9900"
        };
      } else if (depth > 30) {
          return {
          fillColor: "#FFBF00"
        };
      } else if (depth > 10) {
          return {
          fillColor: "#DDFF00"
        };
      } else {
          return {
          fillColor: "#66FF00"
        }
      }
    },

    // Set Function to display information on mouse activity
    onEachFeature: function(feature, layer) {

      // Set information to be displayed - show magnitude, depth, location and url
      var popupText = "<b>Magnitude:</b> " + feature.properties.mag +
        "<br><b>Depth:</b> " + feature.geometry.coordinates[2] +
        "<br><b>Location:</b> " + feature.properties.place +
        "<br><a href='" + feature.properties.url + "'>More info</a>";

      // Create pop up box and close box button for popupText
      layer.bindPopup(popupText, {
        closeButton: true,
        offset: L.point(0, -20)
      });
      // Create event to display popupText information when clicking on the circle label
      layer.on('click', function() {
        layer.openPopup();
      });
    },

    // Create function to identify earthquake location by using the latlng method
    pointToLayer: function(feature, latlng) {
      // Put the circle markers based on the latlng location
      return L.circleMarker(latlng, {
        //Set styles
        radius: Math.round(feature.properties.mag) * 4,
        fillOpacity: 1,
        color: "black",
        weight: 0.5
      });
    },
  // Add all the layers/functions to my map to display the information
  }).addTo(myMap);
});


// Set up the position of the legend
var legend = L.control({ position: "bottomright" });

// Create div to position legend on HTML
legend.onAdd = function() {
  var div = L.DomUtil.create("div", "info legend");

  // Set labels and color legends
  var depth = [-10, 10, 30, 50, 70, 90 ];
  var colors = ["#66FF00","#DDFF00","#FFBF00","#FF9900","#FF9966","#FF3333"]

// loop through our density intervals and generate a label with a colored square for each interval
for (var i = 0; i < depth.length; i++) {
  div.innerHTML +=
      '<i style="background:' + colors[i] + '"></i> ' +
      depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
}
return div;
};
// Add legend to be displayed on myMap
legend.addTo(myMap);