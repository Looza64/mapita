mapboxgl.accessToken = 'pk.eyJ1IjoidGl0aWxvb3phIiwiYSI6ImNrNW80ZHZmZDBjM3czaHF2bzUzZHZiejEifQ.BvLsaBxolOf29Fscff4b8A';
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/dark-v10', //hosted style id
center: [-77.38, 39], // starting position
zoom: 3 // starting zoom
});
//controls of navigation
map.addControl(new mapboxgl.NavigationControl());
map.addControl(
    new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true
    })
    );
    //coordinates of mouse
map.on('mousemove', function(e) {
    document.getElementById('info').innerHTML =
    // e.point is the x, y coordinates of the mousemove event relative
    // to the top-left corner of the map
   // JSON.stringify(e.point) +
   // '<br />' +
    // e.lngLat is the longitude, latitude geographical position of the event
    JSON.stringify(e.lngLat.wrap());

   
 });

   map.on('click', function(e) {
    document.getElementById('info').innerHTML =
    JSON.stringify(e.lngLat.wrap());

    var pancake = document.createElement('div');
    pancake.className ="pancake";
    
    
   
    
    var marker = new mapboxgl.Marker(pancake)
       .setLngLat( e.lngLat.wrap())
        .addTo(map);

   });

   map.addControl(
new MapboxDirections({
accessToken: mapboxgl.accessToken
}),
'top-left'
);
map.on('load', function() {
map.addLayer({
'id': 'room-extrusion',
'type': 'fill-extrusion',
'source': {
// GeoJSON Data source used in vector tiles, documented at
// https://gist.github.com/ryanbaumann/a7d970386ce59d11c16278b90dde094d
'type': 'geojson',
'data':
'../geojson/ual.geojson'
},
'paint': {
// See the Mapbox Style Specification for details on data expressions.
// https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions
 
// Get the fill-extrusion-color from the source 'color' property.
'fill-extrusion-color': ['get', 'color'],
 
// Get fill-extrusion-height from the source 'height' property.
'fill-extrusion-height': ['get', 'height'],
 
// Get fill-extrusion-base from the source 'base_height' property.
'fill-extrusion-base': ['get', 'base_height'],
 
// Make extrusions slightly opaque for see through indoor walls.
'fill-extrusion-opacity': 0.5
}
});
});

       fetch('https://raw.githubusercontent.com/Looza64/mapita/master/geojson/ual.geojson')
       .then(datos => datos.json())
       .then(datos=>{
           console.log(datos)
       } )
    
   
    
    