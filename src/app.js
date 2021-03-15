import '../node_modules/materialize-css/dist/js/materialize.min';
import {displayPresentation} from './presentation/presentation';
import {displayAccueil} from './accueil/accueil';
import {displayStory} from './story/story';
import {displayMap} from './map/map';
import {displayEnigme} from './enigme/enigme';
import {displayNavBar} from './shared/navbar/navbar';


displayNavBar(document.querySelector("header"));
displayPresentation(document.querySelector("main"));
