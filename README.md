# USGS Earthquake Analysis

## Background

The purpose of this project is to help United States Geological Survey (USGS) visualize their global earthquake data to educate the general public and government organizations on environmental issues facing our planet.

The USGS provides earthquake data in GeoJSON format that is updated every minute.  For this project we will use the 'All Earthquakes from the Past 7 Days' to create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.

## Requirements

**1.  Plot Earthquake Data on the map:**
  * Based on the latitude and longitude
  * Marker Size based on the Earthquake's Magnitude
  * Marker Color based on the Eqrthquake's Depth
  * Include pop-up information when marker is clicked.
  * Provide legend of the Earthquake's Depth

**2.  Add Base Layers, Overlay Layers and Techtonic Plates on the Map.**

## Dataset

[All Earthquakes from the Past 7 Days](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)<br>
[Techtonic Plates Data](https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json)

## Method

* Import the GeoJSON data.
* Extract the location, magnitude, depth and details of the earthquake event.
* For each earthquake event, create a pop-up box with the above information.
* For each earthquake event, create a circle marker whose size is based on the magnitude.
* For each earthquake event, create a circle marker whose color is based on teh depth.
* Import four map layers (satellite, outdoors, dark, light) from the Mapbox API.
* Link the map layers, circle markers, and pop-up boxes together to create the interactive map.
* Create a legend for the circle marker color scale and add it to the interactive map.

## Script

* [Leaflet - Maps with Markers](https://github.com/cecileung1208/Leaflet-Challenge/tree/main/Leaflet%20-%20Level%201).
* [Leaflet - Maps with Markers, Overlays, Plates](https://github.com/cecileung1208/Leaflet-Challenge/tree/main/Leaflet%20-%20Level%202).

## Results

## Level 1 - Visualizing Earthquake Dataset
* The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page to get the desired dataset. For this visualization, ['All Earthquakes from the Past 7 Days'](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson), you will used to create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.

![Image](https://github.com/cecileung1208/Leaflet-Challenge/blob/main/Images/4-JSON.png)

* Your data markers should reflect the magnitude of the earthquake by their size and and depth of the earth quake by color. Earthquakes with higher magnitudes should appear larger and earthquakes with greater depth should appear darker in color.
  * The depth of the earth can be found as the third coordinate for each earthquake.

* Include popups that provide additional information about the earthquake when a marker is clicked.

* Create a legend that will provide context for your map data.

* The visualization is shown below:

![Image](https://github.com/cecileung1208/Leaflet-Challenge/blob/main/Images/2-BasicMap.png)



## Level 2 - Adding Base Layers, Overlay Layers and Tectonic Plates to the Earthquake Map

The USGS wants another another set of data to be plotted on the above map to illustrate the relationship between tectonic plates and seismic activity. You will need to pull in a second data set and visualize it along side your original set of data. Data on tectonic plates can be found at [https://github.com/fraxen/tectonicplates](https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json).

* Add Tectonic plates to the map.

* Add a number of base maps to choose from as well as separate out our two different data sets into overlays that can be turned on and off independently.

* Add layer controls to our map.

![Image](https://github.com/cecileung1208/Leaflet-Challenge/blob/main/Images/5-Advanced.png)

## Scripts for Visualizations
* Script is in the [Leaflet - Level 1 folder](https://github.com/cecileung1208/Leaflet-Challenge/tree/main/Leaflet%20-%20Level%201).
* Script is in the [Leaflet - Level 2 folder](https://github.com/cecileung1208/Leaflet-Challenge/tree/main/Leaflet%20-%20Level%202).
