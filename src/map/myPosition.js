// import {  } from "module";


export const displayMyPosition = () => {

    navigator.geolocation.getCurrentPosition(
        (position) => { new google.maps.LatLng(position.coords.latitude, position.coords.longitude) },
        
        (err) => {alert('Oops! This browser does not support HTML Geolocation.')}
    )
    // markerPosition = new google.maps.Marker({
    //     position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
    //     map: map,
    //     title : "Je suis là",
    //   });
};

