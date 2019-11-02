// Toggle variable and function, for swapping between cluster and point.
toggle = true;
function toggleCluster() {
  if(!toggle) {
    map.removeLayer(pointsLayer);
    map.addLayer(clustersLayer);
  } else {
    map.removeLayer(clustersLayer);
    map.addLayer(pointsLayer);
  }
  toggle = !toggle;
};

//make a legend
var legend = L.control({position: 'bottomright'});

//when it's added to the map, have it generate a div
legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 5, 10, 25, 50, 100, 150, 200],
        labels = [];

    // loop through our density intervals and generate a label with a colored square using same 'getColor()' for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

// add it to the map
legend.addTo(map);

// Code below was a start for a map control to change style of county
// var legend = L.control({position: 'topright'});
// legend.onAdd = function (map) {
// 	var div = L.DomUtil.create('div', 'info legend');
// 	div.innerHTML = '<select><option>Counties</option><option>COMING SOON</option><option>COMING SOON</option></select>'
// 	div.firstChild.onmousedown = div.firstChild.ondblclick = L.DomEvent.stopPropagation;
// 		return div;
// };
// legend.addTo(map);