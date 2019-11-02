# Leaflet Feature Examples

This repository contains an example of a [Leaflet](leafletjs.com) map that shows info on projects funded by donors in Kenya from 2013 to 2015. The data was provided by [Kenya OpenData](http://www.opendata.go.ke/datasets/distribution-of-donor-and-gok-funded-projects-2013-to-2015/data). Tiles were provided by [OpenStreetMaps](http://www.openstreetmap.org/).


Some mapping features exampled are:

-GeoJSON point data (projects) with popup text boxes added


-marker clustering using [Leaflet.markercluster plugin](https://github.com/Leaflet/Leaflet.markercluster)


-a toggle for marker clustering following [this stackexchange answer](https://gis.stackexchange.com/questions/152128/leaflet-markercluster-cluster-uncluster-toggle) as an example.


-GeoJSON shape data (Counties) with cloropleth styling based on project counts

-a generated legend


it contains an HTML file that can be run on a web server (index.html).


to install, run `git clone https://github.com/bradleytaftsmith/donor-map .` from the working directory of your web server (/var/www/html/ on apache2)

# To-Dos
1. put data-join in code. This table join was hastily done to generate some mappable data. 
2. change styling of county data by drop-down variable, and show some other views of the data (project values, durations, etc.). I'd like to make an example of doing this without jquery.
3. use [leaflet-search](https://github.com/stefanocudini/leaflet-search) to search the features in a geoJSON layer


