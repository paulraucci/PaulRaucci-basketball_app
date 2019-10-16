console.log("connected");

let map;
initMap();
const options = {
  center: { lat: 41.043149, lng: -73.532469 },
  zoom: 10
};
map = new google.maps.Map(document.getElementById("map"), options);
