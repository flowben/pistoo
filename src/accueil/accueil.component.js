import { Story } from '../story/story.component';
import accueilHtml from './accueil.html';


export class Accueil {
    constructor (element){
        this.element = element;
    }
    
    displayAccueil(){
        document.querySelector(this.element).innerHTML= accueilHtml; 
        
        const buttonList= document.querySelectorAll(".goToStory");
        buttonList.forEach((button, index) => {
            console.log(button, index);
            button.onclick = (e) =>  {
                e.preventDefault();
                this.displayStory(index);
            }
        });
    }
 
    displayStory(index) {
        const component = new Story('main',index);
        component.displayStory();
    }
 
}