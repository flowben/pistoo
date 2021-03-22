import { Presentation } from '../../presentation/presentation.component';
import navBarHtml from './navbar.html';

export class NavBar {
    constructor(element){
        this.element = element;
    }

    displayNavBar() {
        document.querySelector(this.element).innerHTML = navBarHtml; 
        const button = document.querySelector(".goToPresentation");
        button.onclick = (e) => {
            e.preventDefault();
            this.displayPresentation();
        }
    }

    displayPresentation(){
        const component = new Presentation("main");
        component.displayPresentation();
     }
}
