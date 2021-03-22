import { Map } from '../map/map.component';
import story0Html from './story0.html';
import story1Html from './story1.html';
import story2Html from './story2.html';
import imgVieuxLyon from '../../assets/img/Vieux-Lyon.png'

export class Story {
    constructor(element, index){
        this.element = element;
        this.index = index;
    }

    displayStory() {
        const story = document.querySelector(this.element);
        if (this.index === 0) {
            story.innerHTML = story0Html; 

            let img = document.createElement("img");
            img.src = imgVieuxLyon;
            let place = document.querySelector(".imgS");
            place.appendChild(img);

        } else if (this.index === 1) { 
            story.innerHTML = story1Html;

            let img = document.createElement("img");
            img.src = imgVieuxLyon;
            let place = document.querySelector(".imgS");
            place.appendChild(img);

        } else if (this.index ===2) {
            story.innerHTML = story2Html;

            let img = document.createElement("img");
            img.src = imgVieuxLyon;
            let place = document.querySelector(".imgS");
            place.appendChild(img);
            
        }
    
        const button = document.querySelector(".goToMap");
        button.onclick = (e) => {
            e.preventDefault();
            this.displayMap();
        }
    }

    displayMap() {
        const component = new Map('main')
        component.displayMap();
    }

}



