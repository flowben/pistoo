

import { displayStory } from "../story/story";
import accueilHTML from "./accueil.html";

export const displayAccueil = (element) => {
    element.innerHTML = accueilHTML;
    
    const goStory = document.querySelector('.gostory');

    goStory.onclick = (e) => {
        displayStory(element);
        e.preventDefault();
    };
    
    };
      
   
4

.toExponential