# USGS Earthquake Analysis

![Image](https://cdn.downtoearth.org.in/library/large/2020-07-09/0.09889000_1594303909_earthquake.jpg)

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
* For each earthquake event, create a circle marker whose color is based on the depth.
* Import four map layers (satellite, outdoors, dark, light) from the Mapbox API.
* Link the map layers, circle markers, and pop-up boxes together to create the interactive map.
* Create a legend for the circle marker color scale and add it to the interactive map.

## Script

* [Leaflet - Maps with Markers](https://github.com/cecileung1208/Leaflet-Challenge/tree/main/Leaflet%20-%20Level%201).
* [Leaflet - Maps with Markers, Overlays, Plates](https://github.com/cecileung1208/Leaflet-Challenge/tree/main/Leaflet%20-%20Level%202).

## Results

![Image](https://github.com/cecileung1208/USGS-Earthquake-Analysis/blob/main/Images/Global.png)

* Earthquakes usually occur in islands and coastal areas close to the tectonic plates.
*  United States have the most earthquakes out of all the countries in the world but the majority of the earthquake his lower magnitude and depth.
* Earthquakes have a higher depth in the southern hemisphere.
* Earthquakes have a higher magnitude in South America, Central America, South East Asia and Oceania regions.


## Interactive Website
USGS Earthquake Interactive Website -   https://cecileung1208.github.io/USGS-Earthquake-Analysis/
