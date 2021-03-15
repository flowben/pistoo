import { displayMap } from "../map/map";
import storyHTML from "./story.html";


export const displayStory = (element) => {
    element.innerHTML = storyHTML;





const goTomap = document.querySelector('.goTomap');

goTomap.onclick = (e) => {
    displayMap(element);
    e.preventDefault();
};

};
  