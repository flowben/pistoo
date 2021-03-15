import {displayAccueil} from '../../accueil/accueil.js' ;
import navBarHtml from './navbar.html';

export const displayNavBar = (element) => {
    element.innerHTML = navBarHtml ;

    const goToAccueil = document.querySelector('.goToAccueil');
   
    goToAccueil.onclick = (e) => {
        displayAccueil(document.querySelector('main'));
        e.preventDefault();
   };
};