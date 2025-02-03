
console.log("test");
// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map;
let draggableMarker; // The player's draggable marker
let openlocationwindow = null; // Info window for current location

async function initMap() {
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
    restriction: {
      latLngBounds: osuBounds,
      strictBounds: true,
    },
  });

  // Static Marker on Corvallis
  draggableMarker = new google.maps.Marker({
    position: { lat: 44.56495296308599, lng: -123.27630649064899 },
    map: map,
    title: "Move me!",
    draggable: true, // Enable dragging
    animation: google.maps.Animation.DROP, // Drop effect when added
  });

  draggableMarker.addListener("dragstart", () => {
    if(openlocationwindow){
      openlocationwindow.close()
    }
      console.log("Marker is being dragged");
  });
  // Add an event listener to log position when marker is moved
  draggableMarker.addListener("dragend", () => {
      const newPosition = draggableMarker.getPosition();
      console.log(`Marker moved to: ${newPosition.lat()}, ${newPosition.lng()}`);
  });

  // Add an info window to display the marker's position
  const marker_location_window = new google.maps.InfoWindow();
  draggableMarker.addListener("click", () => {
    if(openlocationwindow){
      openlocationwindow.close()
    }
    marker_location_window.setContent(`Marker at: ${draggableMarker.getPosition().lat()}, ${draggableMarker.getPosition().lng()}`);
    marker_location_window.open(map, draggableMarker);
    openlocationwindow = marker_location_window;
  });
  
  const current_location_window = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");
  console.log("button");
  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    if(openlocationwindow){
      openlocationwindow.close()
    }
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

          current_location_window.setPosition(pos);
          current_location_window.setContent("Location found.");
          current_location_window.open(map);
          openlocationwindow = current_location_window;
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, current_location_window, map.getCenter());
        },
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, current_location_window, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, current_location_window, pos) {
  current_location_window.setPosition(pos);
  current_location_window.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation.",
  );
  current_location_window.open(map);
}
