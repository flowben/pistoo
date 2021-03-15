import {displayStory} from '../story/story.js';
import accueilHtml from './accueil.html';

export const displayAccueil = (element) => {
   element.innerHTML = accueilHtml;

      /// preventDefault

      const goToStory = document.querySelector('.goToStory');

      goToStory.onclick = (e) => {
          displayStory(element);
          e.preventDefault();
      };
  };
  