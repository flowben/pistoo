import { displayMap } from '../map/map';
import storyHtml from './story.html';
import imgVieuxLyon from '../../assets/img/Vieux-Lyon.png'

export const displayStory = (element) => {
    element.innerHTML = storyHtml;

    let img = document.createElement("img");
    img.src = imgVieuxLyon;
    let place = document.querySelector(".vieux-lyon");
    place.appendChild(img);

    const goToMap = document.querySelector(".goToMap");

    goToMap.onclick = (e) => {
        displayMap(element);
        e.preventDefault();
    };
};
