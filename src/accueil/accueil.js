import { displayStory } from '../story/story';
import accueilHTML from './accueil.html';

export const displayAccueil = (element) => { 
    element.innerHTML= accueilHtml;

    const goToStory = document.querySelector(".goToStory");
 
    goToStory.onclick = (e) => {
        displayStory(element);
        e.preventDefault();
    };

};