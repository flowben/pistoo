import { displayEnigme } from '../enigme/enigme';
import  mapHtml from './map.html';

export const displayMap = (element) => {
    element.innerHTML= mapHtml;

    const goToEnigme = document.querySelector(".goToEnigme");

    goToEnigme.onclick = (e) => {
        displayEnigme(element);
        e.preventDefault();
    };
    
};