
    var map;
    var markers = [];
    var circles = [];
    function initMap() {
      var brea = {lat: 41.523617, lng: -1.6008345};

      map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: brea,
        mapTypeId: 'terrain'
      });

      // This event listener will call addMarker() when the map is clicked.
      map.addListener('click', function(event) {
        addMarker(event.latLng);
      });

      latlong = event.latLng;
      
    }

    // Adds a marker to the map and push to the array.
    function addMarker(location) {
      var marker = new google.maps.Marker({
        position: location,
        map: map
      });
            // Add circle overlay and bind to marker
    var circle = new google.maps.Circle({
    map: map,
    radius: 1000,    
    fillColor: '#AA0000'
  });
  circle.bindTo('center', marker, 'position');
      circles.push(circle);
      markers.push(marker);
      
      

      if(markers.length>1 && circles.length>1){
        deleteMarkers();
      }

    }

    // Sets the map on all markers in the array.
    function setMapOnAll(map) {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
        circles[i].setMap(map);
      }
    }
    // Shows any markers currently in the array.
    function showMarkers() {
      setMapOnAll(map);
    }

    // Removes the markers from the map, but keeps them in the array.
    function clearMarkers() {
      setMapOnAll(null);
    }

    

    // Deletes all markers in the array by removing references to them.
    function deleteMarkers() {
      clearMarkers();
      markers = [];
      circles = [];
    }
  
