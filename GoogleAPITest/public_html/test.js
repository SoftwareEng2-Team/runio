console.log("test");
// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map;

function initMap() {
  // Bounding Box for the OSU Campus
  const osuBounds = {
    north: 44.56788,
    south: 44.55726,
    east: -123.27163,
    west: -123.28965
  };

  // This will initilize with the boundary
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 44.5646, lng: -123.2620 },
    zoom: 16,
    mapId: "d3a934f281f5593e",
    restriction: {
      latLngBounds: osuBounds,
      strictBounds: true,
    },
  });

  // Static Marker on Corvallis
  const corvallisMarker = new google.maps.AdvancedMarkerElement({
    map: map,
    position: {lat: 44, lng: -123},
    title: "Corvallis, Oregon",
    gmpDraggable: true,
    gmpClickable: true
  });
  
  corvallisMarker.addEventListenter("gmp-click", () => {
    console.log("Marker clicked");
  });
  
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");
  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          if(
            pos.lat < osuBounds.south ||
            pos.lat > osuBounds.north ||
            pos.lng < osuBounds.west ||
            pos.lng > osuBounds.east
          ){
            console.log("Location is outside OSU campus. Stay within the boundary.");
            return;
          }

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        },
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation.",
  );
  infoWindow.open(map);
}

document.createEventListener("DOMContentLoaded", () => {
  initMap();
});