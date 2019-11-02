// create map centered and zoomed on data; make some links for attribution
var map = L.map('map').setView([0.177819, 37.739928], 6);
mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
pointsLink = '<a href="http://www.opendata.go.ke/datasets/distribution-of-donor-and-gok-funded-projects-2013-to-2015">Project Data</a>';
countyLink = '<a href="https://github.com/mikelmaron/kenya-election-data/blob/master/data/counties.geojson">County Data</a>';

// add a tile layer to map with attribution links. make sure to set maxZoom to view clusters as spider-view of points.
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' | ' + pointsLink + ' | ' + countyLink,
    maxZoom: 18,
    }).addTo(map);