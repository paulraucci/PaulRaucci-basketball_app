let map, infoWindow;
// infoWindow ==shows where the user is with pop-up
// =====\/=======\/ initializes map
function initMap() {
  let options = {
    center: { lat: 41.043042, lng: -73.53257 },
    zoom: 15
  };
  map = new google.maps.Map(document.getElementById("map"), options);

  infoWindow = new google.maps.InfoWindow();
  // =====\/\/========\/\/ geolocates on users location by using the IP address
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(p) {
      let position = {
        lat: p.coords.latitude,
        lng: p.coords.longitude
      };
      infoWindow.setPosition(position);
      infoWindow.setContent("You are here");
      infoWindow.open(map);
    });
  } else {
    handleLocationError("No geolocation", map.center());
  }

  function handleLocationError(content, position) {
    infoWindow.setPosition(position);
    infoWindow.setContent(content);
    infoWindow.open(map);
  }
  let input = document.getElementById("search");
  let searchBox = new google.maps.places.SearchBox(input);

  map.addListener("bounds_changed", function() {
    searchBox.setBounds(map.getBounds());
  });

  let markers = [];

  searchBox.addListener("places_changed", function() {
    let places = searchBox.getPlaces();
    if (places.length === 0) return;

    markers.forEach(function(m) {
      m.setMap(null);
    });
    markers = [];

    let bounds = new google.maps.LatLngBounds();
    places.forEach(function(p) {
      if (!p.geometry) return;

      markers.push(
        new google.maps.Marker({
          map: map,
          title: p.name,
          position: p.geometry.location
        })
      );
      if (p.geometry.viewport) bounds.union(p.geometry.viewport);
      else bounds.extend(p.geometry.location);
    });
    map.fitBounds(bounds);
  });
}
//
//
