
import { displayenigme } from "../enigme/enigme";
import mapHTML from "./map.html";

export const displayMap = (element) => {
    element.innerHTML = mapHTML;


const goToenigme = document.querySelector('.goToenigme');

goToenigme.onclick = (e) => {
    displayenigme(element);
    e.preventDefault();
};

};
