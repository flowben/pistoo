# Webpack

*  🔖 **Installation**
*  🔖 **SCSS**
___

## 📑 Installation

Si vous êtes déjà dans un projet où webpack est configuré.

```bash
npm install
```

🔗 [webpack](https://webpack.js.org/)

### 🏷️ **Démarrer le serveur**

```bash
npm start
```

### 🏷️ **Arrêter le serveur**

```bash
CTRL + C
```

#### Avantage

* Vous possédez un serveur et pouvez observer le réseau afin d'être informé des erreurs de chargement.
* L'ensemble de vos fichiers CSS et JavaScript reliés avec la règle import sont compilés en un seul fichier optimisé pour n'avoir qu'un lien vers vos sources.
* Vous pouvez écrire du SCSS et du JavaScript moderne.
* Vous avez un hot reload de vos pages web à chaque modification d'une source

#### Contrainte

* Le dossier desservi par le serveur doit être spécifié

```js
new BrowserSyncPlugin({
    //...
    server: {
        baseDir: 'www',
        //...
    },
}),
```

* Les point d'entée doivent être spécifiées

```js
entry: [
    './src/index.js',
    './src/index.scss',
],
```

* Le point de sortie doit être spécifié

```js
output: {
    path: `${__dirname}/www/dist`,
    filename: 'index.js',
},
```

```js
plugins: [
    new MiniCssExtractPlugin({ filename: 'index.css' }),
]
```

* Les fichiers non reliés aux points d'entré doivent être spécifiés pour le hot reload

```js
new BrowserSyncPlugin({
    //...
    files: [
        'www/index.html',
        // add other files to watch for hot reload
    ],
    //...
}),
```

* Une connaissance de l'outil est requise.

🔗 [Configuration](https://webpack.js.org/configuration/)

___

👨🏻‍💻 Manipulation

Posez les questions appropriées sur l'outil observé puis installez le, démarrez votre serveur, arrêtez le.

___

## 📑 SCSS

> Faire du CSS c'est bien, faire du SCSS c'est mieux.

Le SCSS est un langage ayant les structures itératives, les listes, les conditions, les fonctions et autre. Il permet alors d'écrire plus efficacement le CSS et est assez standard sur les frameworks front-end.

Loin d'apprendre maintenant la syntaxe sur le tas nous pouvons constater des apports:

* En passant vos css en scss, chaque import fusionnera les fichiers pour n'en faire qu'un en css.
* Vous pourrez importer le scss de bootstrap par exemple pour avoir access à leur couleur ou autre variables
* Vous pouvez imbriquer vos styles et partir à l'exploration syntaxique du scss.

___

👨🏻‍💻 Manipulation

Sortez votre css du répertoire public et passez le en scss, attention vous serez maintenant dépendant du compiler associé à webpack et quand vous travaillez vous devez posséder cet environnement. Le scss situé dans src correspond à celui de vos composants d'affichage, vous pouvez utiliser le dossier assets pour caractériser celui des fichiers scss de type librairie.