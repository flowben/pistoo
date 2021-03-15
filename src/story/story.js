import {displayMap} from '../map/map.js';
import storyHtml from './story.html';

export const displayStory = (element) => {
    element.innerHTML = storyHtml;

        /// preventDefault

        const goToMap = document.querySelector('.goToMap');

        goToMap.onclick = (e) => {
            displayMap(document.querySelector('main'));
            e.preventDefault();
        };

        
   };
