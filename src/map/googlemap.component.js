import { Loader } from "@googlemaps/js-api-loader";
import {CoordonateService} from './../shared/services/coordonate.service';

export class GoogleMap{

    constructor() {
        /**
         * @type {} 
         */
        this.map = null;
      };
      
        findPosition() {
          CoordonateService.determinePosition()
          .then(() => {
            this.connectMap();
            console.log("map")
          })
        //   navigator.geolocation.getCurrentPosition((position) => {
        //     // CoordonateService.setLatitudeLongitude(position.coords.latitude, position.coords.longitude);
        //   }, 
          .catch(() => {
            this.notifyError()
            console.log("erreur")
          })
        };

        connectMap(){      
            const loader = new Loader({
            apiKey: "AIzaSyD21vP4lQ5LA5g_GrU0ivkXLUMO0BIKz2s",
            version: "weekly",
            // ...additionalOptions,
          });

            loader.load().then(() => {
              this.map = new google.maps.Map(document.querySelector(".map"), {
                center: {lat : CoordonateService.getCoordonate().latitude, lng: CoordonateService.getCoordonate().longitude},
                zoom: 10,
              });
     
              this.displayMarkerUser();
              this.displayMarkerEnigme();
            });
        };
        
        displayMarkerUser(){
          let markerDepart;
          markerDepart = new google.maps.Marker({
            position: new google.maps.LatLng(CoordonateService.getCoordonate().latitude, CoordonateService.getCoordonate().longitude),
            map: this.map,
            title: "Vous",
          });
        };
        displayMarkerEnigme(){
          let displayDepart;
          displayDepart = new google.maps.Marker({
            icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
            position: new google.maps.LatLng(45.76027407321015, 4.8256350181044),
            map: this.map,
            title: "go",
          });
        };
      
        notifyError(error){
            error.innerHTML = "Geolocation is not supported by this browser.";
        };
        
      
};