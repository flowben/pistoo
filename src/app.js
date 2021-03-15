import '../node_modules/materialize-css/dist/js/materialize.min';
// import { elementOrParentIsFixed } from '../node_modules/materialize-css/dist/js/materialize.min';

console.log('hello');

import {displayNavBar} from './shared/navbar/navbar.js' ;
import {displayAccueil} from './accueil/accueil.js' ;
import {displayStory} from './story/story.js' ;
import {displayMap} from '../src/map/map.js';
import {displayEnigme} from './enigme/enigme.js' ;
// import {displayBackGdStory} from './story/background.js' ;


// // Initialisation fction
displayNavBar(document.querySelector('header'));
displayMap(document.querySelector('main'));// displayMap(document.body); 
// displayStory(document.querySelector('main')); 
// displayEnigme(document.querySelector('main')); 
// // displayAccueil(document.querySelector('main'));