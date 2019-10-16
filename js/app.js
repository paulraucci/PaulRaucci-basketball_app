let map, infoWindow;

function initMap() {
  let options = {
    center: { lat: 41.043042, lng: -73.53257 },
    zoom: 15
  };
  map = new google.maps.Map(document.getElementById("map"), options);

  infoWindow = new google.maps.InfoWindow();

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
}
