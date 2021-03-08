# Bootstrap

*  🔖 **Comparatif**
*  🔖 **Installation**
*  🔖 **Usage**
*  🔖 **Gride**

___

## 📑 Comparatif

Il existe de nombreux frameworks CSS et Bootstrap est l'un d'entre eux.

[Bootstrap](https://getbootstrap.com/)

[Materialize](https://materializecss.com/)

[Bulma](https://bulma.io/)

Il possèdent tous le même principe, le cadre met à disposition des classes avec des règles qui leur sont reliés. En utilisant une classe sur votre élément html il se stylise.

___

## 📑 Installation

Plusieurs solution d'installation.

[Getting Started](https://getbootstrap.com/docs/3.4/getting-started/)

### 🏷️ **CDN**

Il suffit de faire un lien vers le Content Delivry Network de Bootstrap.

#### Avantage

* Simple, pas de connaissance.

#### Inconvénient

* Sans internet, pas de bootstrap.

### 🏷️ **Npm**

Il suffit de faire faire une installation locale ou globale avec npm mais il reste à intégrer la librairie à la page web.

#### Avantage

* Déclaré en dépendance du projet toujours accessible, écosystème friendly.

#### Inconvénient

* Comment établir les liens? Pointer sur node_modules?

### 🏷️ **Webpack**

Il suffit de faire une installation avec un package manager

#### Avantage

* Bootstrap peut être customisé, accès à chaque fonctionnalité du framework, librairie compilée avec notre code source

#### Inconvénient

* Connaissance de Bootstrap , des loaders, des règles et de l'import.

#### Installation

Bootstrap est dépendant pour son JavaScript de la librairie jquery et popper.js

```bash
npm install bootstrap jquery popper.js --save
```

* index.js

```js
import 'bootstrap';
```

* index.scss

```scss
@import "~bootstrap/scss/bootstrap";
```

* index.html

```html
<link rel="stylesheet" type="text/css" href="dist/index.css" />
```

```html
<script type="text/javascript" src="dist/index.js"></script>
```

___

👨🏻‍💻 Manipulation

Installez Bootstrap en mode bonne pratique si possible

___

## 📑 Usage

L'utilisation de Bootstrap est relativement simple, il suffit de se référer à sa documentation. Prenons l'exemple du composant NavBar, rendez vous sur la documentation est appliquez une syntaxe HTML possédant les classes pour styliser suffisamment votre navigation afin de lui appliquer les styles de la navbar Bootstrap.

[Nvbar](https://getbootstrap.com/docs/4.0/components/navbar/)

___

👨🏻‍💻 Manipulation

Mettez en place une navbar

___

## 📑 Gride


Une fonctionnalité nous permettant de nous sensibiliser à l'application de propriétés en fonction d'une taille d'affichage disponible et le layout gride.

[Grid](https://getbootstrap.com/docs/4.0/layout/grid/)

Bootstrap part du principe que vos éléments peuvent être contenus dans une grille via la classe container. La grille possède des lignes. Une ligne possède 12 colonnes, ainsi vous pouvez demander à vos éléments d'occuper un nombre de colonne désiré et ce en fonction d'un point de rupture.

```html
<div class="container">
  <div class="row">
    <div class="col">
      25%
    </div>
    <div class="col-6">
     50%
    </div>
    <div class="col">
      25%
    </div>
  </div>
</div>
```

[Grid Options](https://getbootstrap.com/docs/4.0/layout/grid/#grid-options)

Vous pouvez alors dimensionner et juxtaposer vos éléments en fonction d'un affichage disponible.

```html
<div class="container">
  <div class="row">
    <div class="col col-lg-6">
      Auto ou 50%
    </div>
  </div>
</div>
```

___

👨🏻‍💻 Manipulation

Utiliser la grille pour dimensionner et positionner vos éléments

___

Ces différents points de rupture sont disponibles sur beaucoup de fonctionnalité comme la taille des textes, le display et autre

___

👨🏻‍💻 Manipulation

Produisez une ou plusieurs pages afin d'avoir les interfaces utilisateur statique de vos site web en utilisant le scss et Bootstrap.