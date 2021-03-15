# 🎓 TP - 01 Jeu de piste dans la ville

Votre objectif pendant ce TP est d'atteindre les objectifs fonctionnels.

Vous avez la capacité de vous exprimer en `HTML`, `CSS`, `d'utiliser des librairies`, vous disposez d'un `environnement de développement` et avez découvert `JavaScript` en étudiant les `variables`, les `types`, le `DOM`, les `fonctions` et les `évènements`.

___

## 🐥 Précedement

> Vous avez décidé d'une thématique de projet et vous avez découvert des syntaxes vous permettant de vous rapprocher de l'objectif du projet.

Vous travaillez à implémenter le rendu graphique en pur JavaScript pour obtenir une Single Page Application.

___

## 🦆 Maintenant

Vous allez découvrir:
* L'intégration de script dynamiquement
* L'obtention des coordonnées GPS
* L'intégration d'une carte
* La mise à jour de son affichage

___

## 👨🏻‍💻 Script

> Intégrer le service GooglMap

[@see developers.google.com/maps/documentation](https://developers.google.com/maps/documentation/javascript/overview#maps_map_simple-html)

Son utilisation est payante, je vous livre une clef trouvée sur github.

```bash
AIzaSyD21vP4lQ5LA5g_GrU0ivkXLUMO0BIKz2s
```

Vous devez suivre la documentation exposée par Google Map, mon objectif est de vous guider dans son utilisation. Vous remarquez que pour obtenir le service il faut intégrer un lien dans votre HTML: c'est un exemple basic.

* 📝 Intégrez le script google map dans la fonction responsable de son rendu graphique dynamiquement en utilisant le DOM. Vous devez créer la balise, préciser sa source et l'insérer dans le document.

* 📝 Avant son intégration, ajoutez un écouteur sur son l'évènement de type load afin de pouvoir régir à son chargement dans une prochaine étape.

___

## 👨🏻‍💻 GPS

> Obtenir votre position

Une fois le service google map chargé, vous voulez certainement afficher une carte, mais qui pointe sur votre position!

[@see Web/API/Geolocation/getCurrentPosition](https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition)

Vous pouvez obtenir cette information en ajoutant une fonction de rappel en argument de la méthode getCurrentPosition de la propriété geolocation de l'objet intégré navigator.

```js
navigator.geolocation.getCurrentPosition(
    (position) => {
        console.log(
            `Latitude : ${position.coords.latitude}`,
            `Longitude : ${position.coords.longitude}`
        );
    }, 
    (err) => {
        console.log(`ERROR: ${err.message}`);
    },
);
```

Intéressez vous aux options, surtout concernant la précision!

* 📝 Une fois le service Google Map chargé, récupérez vos coordonnées.

___

## 👨🏻‍💻 Carte

> Afficher une carte

L'affichage de la carte est décrite dans la documentation du service déjà relevé.

```js
const map = new google.maps.Map(
    document.getElementById("map"),
    {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    }
);
```

Cependant cette carte par défaut peut se personnaliser pour choisir ses couleurs, les informations qu'elle affiche, son information de zoom et autre.

* 📝 Affichez la carte dans son emplacement prévu une fois les données GPS obtenues.
* 📝 Personnalisez l'apparence de la carte et les informations qu'elle affiche
* 📝 Affichez une marker avec votre emplacement.

___

## 👨🏻‍💻 Tracking

> Mettre à jour la carte

La carte doit suivre votre positions quand elle évolue.

Il est possible avec la méthode watchPosition de souscrire à une information de position sur un interval à définir. Cette méthode est très similaire à getCurrentPosition.

[@see Web/API/Geolocation/watchPosition](https://developer.mozilla.org/fr/docs/Web/API/Geolocation/watchPosition)

* 📝 Une fois la carte affichée, souscrivez à l'évolution de la position.
* 📝 Quand la position évolue, déplacez votre marker puis recentrez la carte.

___

## 🐧 Next

Vous découvrirez:
* L'intégration de web services
* La logique métier

___

## 👨🏻‍💻 Markers

> Définir un algorithme

Votre jeu de piste doit certainement proposer des points particuliers dans la ville. Peut être vous décrivez un parcours?

[@see developers.google.com/maps/documentation/javascript/examples/directions-simple](https://developers.google.com/maps/documentation/javascript/examples/directions-simple)

Mais comment déterminez vous le point d'arrivé de votre tracé en fonction d'un choix de parcours? C'est votre logique applicative, votre logique métier.

* 📝 Déterminez la logique métier de votre application
* 📝 Affichez les lieux remarquables avec des markers
* 📝 Affichez des tracés si vous en proposez.

___

## 👨🏻‍💻 Logique

> Proposer des choix

Vos instructions s'exécuterons selon des flux différents et vous devez apprendre à faire des choix. Je vous invite à observer la structure conditionnelle, les opérateurs de comparaison et logique.

[@see JavaScript/wiki/03#-conditions](https://github.com/seeren-training/JavaScript/wiki/03#-conditions)

```js
if (latitude < 22.456 && latitude < 22.454) {
    // La latitude est dans l'interval d'un point particulier
}
```

* 📝 Une fois la carte affichée et la position surveillée, mettez en place votre logique pour pouvoir réagir si la position actuelle correspond à celle d'un point remarquable.

___

## 🕕 Manage your time

C'est une première étape à franchir avant de prendre en compte la notion de temps, de proposer de conclure un parcours, de gérer les erreurs de votre application...