import { displayAccueil } from "../../accueil/accueil";
import navbarHTML from "./navbar.html";

export const displaynavBar = (element) => {
    element.innerHTML = navbarHTML;

    const gotoaccueil = document.querySelector('.gotoaccueil');

    gotoaccueil.onclick = (e) => {
       displayAccueil(element);
        e.preventDefault();
    };
    
    };
      


    

