
//add points to pointsLayer, and bind pop-up to each feature we care about
pointsLayer = L.geoJson(points, {
    onEachFeature: function(feature, layer) {
        var popupText = 
        	"<strong>"+feature.properties.project_title+"</strong>"
        	+ "<br><strong>County: </strong>" + feature.properties.county
        	+ "<strong>  |  Constituency: </strong>" + feature.properties.contituency
            + "<br><br><strong>Project Description: </strong>" + feature.properties.project_description
            + "<br><strong>Project Objectives: </strong>" + feature.properties.project_objectives;
        layer.bindPopup(popupText);
    }
});

//add cluster layer and fill it with points
clustersLayer = L.markerClusterGroup();
clustersLayer.addLayer(pointsLayer);
clustersLayer.addTo(map);

// function to return color based on different project counts. I got my colors from 
function getColor(d) {
    return d > 200 ? '#005824' :
           d > 150  ? '#238b45' :
           d > 100 ? '#41ae76' :
           d > 50 ? '#66c2a4' :
           d > 25 ? '#99d8c9' :
           d > 10 ? '#ccece6' :
           d > 5 ? '#e5f5f9' :
                      '#f7fcfd';
}

//function to style by projects
function styleProjects(feature) {
    return {
        fillColor: getColor(feature.properties[ 'Project Count by County' ]),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
L.geoJson(counties_joined, {style: styleProjects}).addTo(map);
