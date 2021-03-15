import { displayPresentation } from '../../presentation/presentation';
import navBarHtml from './navbar.html';

export const displayNavBar = (element) => {
    element.innerHTML= navBarHtml;
 
const goToAccueil = document.querySelector(".goToPresentation");

goToAccueil.onclick = (e) => {
    displayPresentation(document.querySelector("main"));
    e.preventDefault();
}
};
