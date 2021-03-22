import '../node_modules/materialize-css/dist/js/materialize.min';
import {Presentation} from './presentation/presentation.component';
import {NavBar} from './shared/navbar/navbar.component';

// displayNavBar(document.querySelector("header"));
// displayAccueil(document.querySelector("main"));

const navbar = new NavBar ("header");
navbar.displayNavBar();

const startApp = new Presentation ("main")
startApp.displayPresentation();




