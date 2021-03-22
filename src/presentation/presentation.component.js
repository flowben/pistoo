import { Accueil } from '../accueil/accueil.component';
import presentationHtml from './presentation.html';
import imgAccueil from '../../assets/img/Accueil.jpg';

export class Presentation {
    constructor(element){
        this.element = element;
    }

    displayPresentation() {
        document.querySelector(this.element).innerHTML = presentationHtml; 

        let imgA = document.createElement("img");
        imgA.src = imgAccueil;
        let placeImgA = document.querySelector(".imgAccueil");
        placeImgA.appendChild(imgA);

        const button = document.querySelector(".goToAccueil");
        button.onclick = (e) => {
            e.preventDefault();
            this.displayAccueil();
        }
        
    }

    displayAccueil() {
        const component = new Accueil('main');
        component.displayAccueil();
        
    }
}


