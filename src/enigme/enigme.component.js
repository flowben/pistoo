import enigmeHtml from './enigme.html';
import imgLyon from '../../assets/img/lugdunum.jpg';

// insertion de la page HTML

export const displayEnigme = (element) => {
    element.innerHTML = enigmeHtml;

// insertion img

       let img = document.createElement('img');
       img.src = imgLyon;
       let place = document.querySelector('.lugdunum');
       place.appendChild(img);

// B-g

        // const bgI = document.querySelector('main');
        // const imgBg = lyonVille3;
        // imgBg.src = imgLyon2;
        // bgI.appendChild(imgBg);

        // bgI.style.backgroundImage = "url(imgLyon2)";

        // code dessous ok
        // const bgI = document.querySelector('main');
        // bgI.style.backgroundImage = "url('https://media-cdn.tripadvisor.com/media/photo-b/2560x500/15/33/f7/4d/lyon.jpg')";

        const bgI = document.querySelector('main');
        bgI.style.backgroundImage = "url('../assets/img/lyonVille3.jpg')";

       
        // function changeBackground(body, imgLyon2) {
        //     return body.style.backgroundImage = "url('imgLyon2')";
        // }
};

// // function réponse form (value3 = true)
// function score (){
//     let scoreMax = nombre de question-1
//     if value = value3 -> scoreMax;
//     else : ajouter -1 à chaque tour
//     boucle ?
// }
// function vibrationOn (){
//     access to sensor 
//     vibration window.navigator.vibrate(200);
// }
// function goodAnswer () {
//     if value3 submit --> true / openPopUpGoodJob & link to Enigme2  & score
//     else --> vibrationOn / ouvrir pop up réessayer? {
//         if yes -> retour enigme
//         else : retour accueil
//     }
// }
// function openPopUpGoodJob()

