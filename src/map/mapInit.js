import { Loader } from "@googlemaps/js-api-loader";

export const displayMapInit = () => {
  let map;
  let markerDepart;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {

      const loader = new Loader({
        apiKey: "AIzaSyD21vP4lQ5LA5g_GrU0ivkXLUMO0BIKz2s",
        version: "weekly",
        // ...additionalOptions,
      });

      let coords = { lat: position.coords.latitude, lng: position.coords.longitude };

      loader.load().then(() => {
        map = new google.maps.Map(document.querySelector(".map"), {
          center: coords,
          zoom: 18,
        });

        markerDepart = new google.maps.Marker({
          position: coords,
          map: map,
          title: "Départ",
        });
      });

    });
  } else {
    map.innerHTML = "Geolocation is not supported by this browser.";
  }

}