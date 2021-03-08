# CSS

*  🔖 **Selectors**
*  🔖 **Organisation**
*  🔖 **Décoration**
*  🔖 **Unités**
*  🔖 **Dimensionnement**
*  🔖 **Positionnement**

___

## 📑 Selectors

[Selectors](https://developer.mozilla.org/fr/docs/Web/CSS/S%C3%A9lecteurs_CSS)

Un sélecteur est utilisé pour sélectionner les éléments auxquels appliquer les propriétés contenues dans le bloc le précédent. Un sélecteur peut être un composé de plusieurs motifs séparés par une virgule.

### 🏷️ **Universel**

Il cible tous les éléments.

```css
* {
    color: blue;
}
```

### 🏷️ **Simple**

Un motif peut cibler des éléments en utilisant le nom des balises. Tous les éléments correspondant à la description d'un motif sont stylisés. Ce selector correspond à un **reset des styles par défaut des balises**.

```css
p {
    color: blue;
}
```

### 🏷️ **Classe**

Le point suivi d'une valeur cible les éléments dont la valeur de l'attribut class correspond. Plusieurs éléments peuvent avoir la même classe, **c'est le selector à privilégier**.

```html
<p class="my-paragraphe"></p>
```

```css
.my-paragraphe {
    color: blue;
}
```

### 🏷️ **Id**

Le dièse suivi d'une valeur cible les éléments dont la valeur de l'attribut id correspond. Attention, ajouter un id correspond à ajouter un lien de **navigation interne** dans la page, une ancre.

```html
<p id="my-paragraphe"></p>
```

```css
#my-paragraphe {
    color: blue;
}
```

### 🏷️ **Attributs**

Les CSS 2 et 3 proposent la sélection par valeur d'attributs correspondant.

```html
<p title="Green">Green</p>
<p title="Blue">Blue</p>
<p title="Du orange">Orange</p> 
```

```css
[title] {
    color: green;
}
[title=Blue] {
    color: blue;
}
[title~=orange] {
    color: orange;
}
```

### 🏷️ **Combinateurs**

#### Enfants

```css
p a {
    color: blue;
}
```

#### Enfants directe

```css
p > a {
    color: blue;
}
```

#### Frères

```css
div ~ p {
    color: blue;
}
```

#### Frère directe

```css
div + p {
    color: blue;
}
```

### 🏷️ **Pseudo classes**

Les pseudo classes sont présentes depuis les CSS de niveau 1 et proposent d’interagir avec le navigateur ou l'utilisateur pour styliser les éléments. Les pseudo éléments stylisent des nœuds qui n'existent pas dans l'arborescence du DOM en simulant des éléments à part entier.

```css
a:hover {
    color: blue;
}
```

### 🏷️ **Pseudo éléments**

Les pseudo éléments stylisent des nœuds qui n'existent pas dans l'arborescence du DOM en simulant des éléments à part entier.

```css
a::first-letter {
    color: blue;
}
```

___

## 📑 Organisation

Vous possédez donc des expressions permettant de cibler des éléments du document afin de leur appliquer un style. Avant de découvrir des règles de stylisation, parlons de votre première organisation de règles CSS.

> L'erreur à ne pas commettre c'est de commencer le CSS en entassant vos règles dans un fichier sans réflexion sur sa capacité à grossir.

### 🏷️ **Import**

La règle @import est utilisée afin d'importer des règles à partir d'autres feuilles de style.

```css
@import 'mon-fichier.css';
```

🔗 [Import](https://developer.mozilla.org/fr/docs/Web/CSS/@import)

L'objectif de cette règle et de toute organisation CSS et de n'avoir qu'**un seul lien vers vos styles et de les imbriquer avec des règles d'importation**.

#### Librairie

Vous pouvez avoir deux approches pour gérer vos feuilles de style, la première consiste à avoir des styles spécifiques que vous souhaiterai appliquer à plusieurs éléments. C'est une stratégie orientée librairie réutilisable.

```css
.my-red {
    color: red
}
```

Et les appliquer sur de l'HTML ensuite

```html
<p class="my-red"></p>
```

Ce qui impliquera d'avoir ces écritures dans des fichiers communs à tous vos composants d'affichage.

```bash
assets
|_css
    |_lib
        |_color
            - color.css
```

#### Composant

Une autre approche consiste à traiter les cas particuliers et faire du non réutilisable, en ciblant des composants d'affichage pour leur appliquer des propriétés css sans rapport avec l'orientation du selector.

```html
<header>
    <nav class="navbar"></nav>
</header>
```

En appliquant le CSS dans un second temps.

```css
.navbar {
    color: red
}
```

Ce qui impliquera d'avoir ces écritures dans un fichier en rapport au composant d'affichage concerné.

```bash
assets
|_css
    |_app
        |_home
            - navbar.css
```

Ces deux approches ne s'opposent pas, elles sont complémentaires. L'objectif reste de faire du réutilisable autant que possible, mais il y a toujours des cas particuliers à traiter.

___

👨🏻‍💻 Manipulation

Avant d'étudier les règles fondamentales. Créez vos différents dossiers et fichiers css. Utiliser import pour les relier à un seul point d'entré qui est chargé par votre document html.

___

## 📑 Décoration

### 🏷️ **Couleur**

Il est possible d'utiliser différents modes colorimétriques pour spécifier une couleur, l’hexadécimale, le rgb et le hsl. Le niveau 3 ajoute le rgba et le hsla avec un quatrième paramètre pour la couche alpha dont la valeur est comprise entre 0 et 1.

* color: nom;
* color: hexadécimal;
* color: rgb(rouge, vert, bleu);
* color: rgba(rouge, vert, bleu, alpha);
* color: hsl(teinte , saturation, (%) luminosité);
* opacity: (int|float) number;


```css
* {
    color: #FF0000;
}
```

#### Héritage

De nombreuses propriété peuvent être héritée du parent comme la couleur. Pour appliquer une propriété parente il faut utiliser la valeur inherit.

* color: inherit;

### 🏷️ **Background**

La propriété background peut suffire pour afficher couleurs, images ou dégradés mais elles est complétée par une série de sous propriétés.

* background: bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment;

```css
* {
    background: black url(image.png) center/auto 100% no-repeat padding-box border-box scroll; 
}
```

La déclaration précédente peut se détailler de la façon suivante.

```css
* {
    background-color: black;
    background-image: url("image.png");
    background-position: center;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-origin: padding-box;
    background-clip: border-box;
    background-attachment: scroll;
}
```

#### Dégradé

Un dégradé doit utiliser la fonction linear-gradient comme dans l'exemple suivant.

```css
* {
    background: linear-gradient(135deg, green 0%, blue 100%); 
}
```

### 🏷️ **Texte**

La police de caractère à appliquer peut être définie par la propriété font-family. Il faut séparer les valeurs par un comma afin de proposer plusieurs typo au cas où celles demandées ne sont pas présentes sur le poste de l'utilisateur.

```css
* {
    font-family: BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, sans-serif;
}
```

#### Taille

La taille de la police est définie par la propriété font-size. La valeur peut s’exprimer dans différentes unités que nous aborderons dans la prochaine section mais par défaut la valeur est héritée de l'élément parent.

```css
* {
    font-size: 1.2em;
}
```

#### Alignement

L'alignement dans le conteneur peut être défini par la propriété text-align.

* text-align: left|right|center|justify;

```css
* {
    text-align: center; 
}
```

#### Hauteur

La hauteur de ligne est définie par la propriété line-height.

```css
* {
    line-height: 2em;
}
```

### 🏷️ **Défaut**

Certains éléments comme les liens avec un href ou les éléments de liste peuvent avoir un style par défaut.

#### Liens

```css
* {
    text-decoration: none;
}
```

#### Listes

```css
* {
    list-style-type: none;
}
```

___

👨🏻‍💻 Manipulation

Décorez votre page en utilisant les classes pertinentes en rapport avec les valeurs de propriété dans les bons fichiers puis appliquez vos classes sur votre document html.

___

## 📑 Unités

Les éléments de type block peuvent avoir une largeur et hauteur précise contrairement aux éléments de type en ligne. Le choix des unités utilisées ont un impact sur le design du modèle qui peut avoir un aspect visuel statique ou adaptatif selon le type d'unités choisi.

### 🏷️ **Relatives**

Les unités relatives sont à privilégier pour un affichage adaptatif en fonction du device et du zoom de l'utilisateur par opposition aux unités absolues.

|Unité|Description|
|--|--|
|em|Relative à la font-size héritée|
|ex|Relative à la hauteur de la font-size héritée|
|ch|Relative à la largeur de la font-size héritée|
|rem|Relative à la font-size héritée par l'élément racine|
|vh|Relative à la hauteur du viewport (1/100)|
|vw|Relative à la largeur du viewport (1/100)|
|vmin|Relative à la hauteur ou largeur du viewport (1/100) selon la plus petite valeur|
|vmax|Relative à la hauteur ou largeur du viewport (1/100) selon la plus grande valeur|
|%|Relative à la hauteur ou largeur du conteneur|

### 🏷️ **Absolues**

Les unités absolues sont à privilégier pour un affichage papier dont le format est connu et définitif comme pour une impression par exemple. **Utiliser des valeurs absolues pour un affichage sur device est une mauvaise pratique**.

|Unité|Description|
|--|--|
|px|Représente le pixel|
|cm|Représente le centimètre|
|mm|Représente le millimètre|
|in|Représente le inch/pouce|
|pt|Représente le point pica (1/72 in)|
|pc|Représente le pica (1/6 in)|

___

## 📑 Dimensionnement

### 🏷️ **Largeur**

La largeur d'un bloc à un impact sur les éléments qui le suivent s'ils sont flottants. En spécifiant une largeur relative à la largeur d'un device le bloc s'adapte au redimensionnement, en choisissant une valeur relative à la taille de la police le bloc s'adapte au zoom de l'utilisateur.

* width|min-width|max-width: valeur|auto;

```css
* {
    width: 100%;
}
```

### 🏷️ **Hauteur**

La hauteur d'un bloc à un impact sur les éléments qui ne sont pas à la fois flottants et juxtaposés au bloc. Le pourcentage pour définir une hauteur n'est pas pris en charge pour un élément sans position ou n'ayant pas un parent positionné.

* height|min-height|max-height: valeur|auto;

```css
* {
    height: 100vh;
}
```

### 🏷️ **Marges**

Les marges pour chaque coté du bloc peuvent être définies avec une déclaration courte ou une par une. En spécifiant une seule valeur à la propriété margin elle s'applique à chaque coté. En en spécifiant deux, la première indique une valeur pour le haut et le bas et la seconde pour la droite et la gauche. En spécifiant trois valeurs, la troisième définit la marge du bas. Le pourcentage appliqué aux marges haut et bas utilise une valeur relative à la largeur du device et non à sa hauteur.

* margin: tous[, coté[, bas[, gauche]]];

```css
* {
    margin: 2em 5% 5%;
}
```

Les mêmes marges peuvent se définir une par une de la façon suivante.

```css
* {
    margin-top: 2em;
    margin-right: 5%;
    margin-bottom: 5%;
    margin-left: 5%;
}
```

### 🏷️ **Padding**

La propriété padding définit des marges internes au bloc, la taille du padding s'ajoute à la taille de l'élément. La déclaration du padding pour chaque coté se fait de la même façon que pour margin.

* padding: tous[, coté[, bas[, gauche]]];

```css
* {
    padding: 2em 5% 5%;
}
```

___

👨🏻‍💻 Manipulation

Dimensionnez les éléments de votre page en utilisant les classes pertinentes en rapport avec les valeurs de propriété dans les bons fichiers puis appliquez vos classes sur votre document html.

___

## 📑 Positionnement

### 🏷️ **Display**

Cette propriété définit le type et donc le comportement du bloc représenté par un élément. Par défaut certaines balises comme une div ou un paragraphe sont de type bloc et imposent un retour chariot après leur contenu, d'autres éléments sont de type en ligne comme une citation ou un lien. Display sert à modifier le type de bloc d'un élément.

* display: block|none|inline|inline-block|...

#### block

En utilisant la valeur block sur des éléments de type en ligne comme des liens par exemple, sans avoir besoin d'utiliser un élément br chaque élément impose un retour chariot.

```css
.d-block {
  display: block;
}
```

#### none

La valeur none masque le bloc, il n'interfère plus avec la mise en page contrairement à la propriété opacity avec une valeur de 0.

```css
.d-none {
  display: none;
}
```

#### inline

La valeur inline modifie un bloc pour un affichage en ligne. Les éléments en ligne peuvent avoir une marge et une marge interne mais ne peuvent pas utiliser la propriété largeur et hauteur.

```css
.d-inline {
  display: inline;
}
```

#### inline-block

La valeur inline-block est pratique, elle permet de placer des éléments en ligne en gardant la possibilité d'utiliser la propriété largeur et hauteur. Elle s'utilise souvent pour éviter de recourir à des blocs flottants sortant du flux du conteneur.

```css
.d-inline-block {
  display: inline-block;
}
```

Quand une ligne est sautée entre deux éléments en inline-block, un espace sépare visuellement ces deux éléments, pour coller deux éléments dans ce cas de figure il faut utiliser une marge négative.

```css
.fix-right {
  margin-right: - .25em;
}
```

### 🏷️ **Float**

En utilisant la propriété flottant sur un élément son type de bloc devient block mais **il échappe au flux de son conteneur**, c'est à dire que la hauteur de son parent n'est pas impactée par la hauteur de l'élément flottant tant que le float n'est pas nettoyé.

* float: none|left|right;

```css
.item {
    float: left;
}
```

#### Clear

Clear nettoie les flottement en permettant aux éléments flottants du même scope placés avant l'élément possédant la propriété clear de rentrer dans le flux.

* clear: none|left|right|both;

```css
.clear-left {
    clear: left;
}
```

Clear permet alors que l'item ait un impact sur la taille de son parent.

```html
<p>
  <img class="item" />
  <span class="clear-left" />
</p>
```

### 🏷️ **Position**

#### Position

La propriété position permet d'utiliser les propriétés `top`, `right`, `bottom` et `left`. Elles appliquent des positions relatives au device, à un conteneur ou à un élément.

* position: absolute|fixed|relative|static

#### Static

La valeur par défaut des éléments est static, il s'agit de la positon de tous les éléments n'ayant pas utilisé une autre position.

#### Fixed

Une position fixée est relative au device et ne prend pas part au défilement du flux, elle est positionnée indépendamment de ses parents.

#### Absolute

Une position absolue définit une positon à un élément `relatif à la positon d'un nœud parent` positionné ou au body du document. Contrairement à une position fixe `l'élément est dans le flux` du scroll et peut être défilé.

```css
.rectangle {
    height: 50%;
    left: 25%;
    top: 0;
    width: 50%; 
}
```

#### Relative

Une position relative est positionnée par rapport à son origine, sa hauteur et sa largeur se définissent comme pour un élément de type block, le pourcentage n'est pas admis sans parent positionné. Elle peut être utilisée pour donner une position relative à un élément positionné en absolue.

### 🏷️ **Z-index**

La positon du premier au neuvième plan des éléments positionnés peut être défini par la propriété z-index. Par défaut les plans sont définis par ordre de déclaration des éléments et la mise en page est en lien avec l'organisation du document. Un index plus élevé se positionne au dessus d'un index inférieur.

* z-index: auto|number;

Les éléments enfants d'un bloc z-indexés héritent de l'index et de la hiérarchie du plan.

```css
.z-9 {
    z-index: 9;
}
```

___

👨🏻‍💻 Manipulation

Positionnez les éléments de votre page en utilisant les classes pertinentes en rapport avec les valeurs de propriété dans les bons fichiers puis appliquez vos classes sur votre document html.