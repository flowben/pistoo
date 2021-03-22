import { Coordonate } from "../models/coordonate.model"


const coords = new Coordonate ();

export class CoordonateService {

    static getCoordonate(){
        return coords;
    }

    static setLatitudeLongitude(latitude, longitude) {
        coords.latitude = latitude;
        coords.longitude = longitude;
    }

    static determinePosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((position) => {
            CoordonateService.setLatitudeLongitude(position.coords.latitude, position.coords.longitude)
                resolve();
            }, () => {
                console.log("Ca se passe mal");
                reject();
            });
        });
    }
}
