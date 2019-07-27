let map;

function initMap() {
  let mapOptions = {
    zoom: 10,
    center: {lat: 40.758904, lng:-73.985128},
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT
    },
    mapTypeControl: false,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT,
      // style: google.maps.MapTypeControlStyle.DROPDOWN_MENU    
    },
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false
  }

  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions)

}

google.maps.event.addDomListener(window, 'load', initialize)