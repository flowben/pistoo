import mapHtml from './map.html';
import imgLyon from '../../assets/img/Vieux-Lyon.png';
import { GoogleMap } from "./googlemap.component";


export class Map {
    constructor(element){
        this.element = element;
    }

    displayMap(){
      document.querySelector(this.element).innerHTML= mapHtml;

      let img = document.createElement('img');
      img.src = imgLyon;
      let place = document.querySelector('.vieuxLyon');
      place.appendChild(img);

      this.findPosition();

      const button = document.querySelector(".goToEnigme");
        button.onclick = (e) => {
            e.preventDefault();
            this.displayEnigme();
        }
    }

    findPosition(){
      const component = new GoogleMap();
      component.findPosition();
    }

    displayCourse(){

    }

    displayEnigme() {
      console.log('afficher Enigme')
    }

}