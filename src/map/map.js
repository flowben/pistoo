import {displayEnigme} from '../enigme/enigme.js';
import mapHtml from './map.html';
import imgLyon from '../../assets/img/exLyon.jpg';

export const displayMap = (element) => {
    element.innerHTML = mapHtml;

    // insertion img

    let img = document.createElement('img');
    img.src = imgLyon;
    let place = document.querySelector('.vieuxLyon');
    place.appendChild(img);
    
    /// preventDefault

    const goToEnigme = document.querySelector('.goToEnigme');

    goToEnigme.onclick = (e) => {
        displayEnigme(document.querySelector('main'));
        e.preventDefault();
    };
};
