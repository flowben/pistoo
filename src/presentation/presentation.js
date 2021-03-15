import { displayAccueil } from '../accueil/accueil';
import accueilHtml from './presentation.html';
import imgAccueil from '../../assets/img/Accueil.jpg';

export const displayPresentation = (element) => {
    element.innerHTML= accueilHtml; 

    let imgA = document.createElement("img");
    imgA.src = imgAccueil;
    let placeImgA = document.querySelector(".imgAccueil");
    placeImgA.appendChild(imgA);

    const goToAccueil = document.querySelector(".goToAccueil");

    goToAccueil.onclick = (e) => {
        displayAccueil(element);
        e.preventDefault();
    };

};
