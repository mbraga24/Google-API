var map;
var UDmapStyle =
[
  {
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "landscape",
    "stylers": [
      { "visibility": "on" },
      { "color": "#204080" }
    ]
  },{
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "on" },
      { "color": "#558ddd" }
    ]
  },{
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#204080" }
    ]
  },{
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      { "visibility": "on" },
      { "color": "#8ea9e4" }
    ]
  },{
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "on" },
      { "color": "#8ea9e4" }
    ]
  },{
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#204080" }
    ]
  },{
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      { "visibility": "on" },
      { "color": "#8ea9e4" }
    ]
  },{
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#204080" }
    ]
  },{
    "featureType": "poi",
    "elementType": "geometry.stroke",
    "stylers": [
      { "visibility": "on" },
      { "color": "#8ea9e4" }
    ]
  },{
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#8ea9e4" }
    ]
  },{
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#8ea9e4" }
    ]
  },{
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "on" },
      { "color": "#8ea9e4" }
    ]
  }
];
function initMap() {
  var mapOptions = {
	zoom: 15,
	center: {lat: 40.758904, lng:-73.985128},
	backgroundColor: "#204080", 
	styles: UDmapStyle
  };
  map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions );
};
google.maps.event.addDomListener(window, 'load', initMap);