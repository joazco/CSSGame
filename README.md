# CSSGame

[![Deploy to Firebase Hosting on merge](https://github.com/joazco/CSSGame/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/joazco/CSSGame/actions/workflows/firebase-hosting-merge.yml)

[https://cssgame-54745.firebaseapp.com/](https://cssgame-54745.firebaseapp.com/)

CSSGame est un mini-jeux customisable afin d'initier les utilisateurs aux propriétés
css et à l'inspecteur d'éléments des navigateur.

## Génarateur de niveaux

Les niveaux sont configurable dans le fichier `levels.js` à la racine, il suffit d'éditer la constante `levels`.

| Key      |         Types         |                                                                                    |
| -------- | :-------------------: | ---------------------------------------------------------------------------------: |
| text     |        String         |                                               Instruction du niveau <br>_required_ |
| target   |    Query selector     | Définit la cible du niveau <br> _optional_ <br> _default value:_ `#exercice-block` |
| property |        String         |                                     La propriété css qui sera testé <br>_required_ |
| value    |        String         |                                            La valeur qui sera testé <br>_required_ |
| link     | String\|Array<String> |                           Lien pour aider à la résolution du niveau <br>_optional_ |

## Configurateur

Il est possible de configurer le projet en éditant la constante `configuration` dans le fichier `configuration.js` à la racine.

| Key               |    Types     |                                                                                             |
| ----------------- | :----------: | ------------------------------------------------------------------------------------------: |
| disableSolution   |   Boolean    |                                           Désactive les fonctions de résolution des niveaux |
| autoStartSolution |   Boolean    |             Démarre automatique à chaque rafraichissement de page la résolution des niveaux |
| autoSolutionTo    |    Number    | Démarre automatique à chaque rafraichissement de page la résolution jusqu'au niveau définit |
| timeToUpdate      | Number\|null |                       Temps en milliseconde de passage du niveau supérieur après résolution |
| showModalEnd      |   Boolean    |                      Définit l'affichage de la boite dialog de félicitation à la fin du jeu |

## Global fonctions

### nextSolution

Permet de passer le niveau actuel

```js
nextSolution();
```

### solutionTo

Permet d'aller au niveau souhaité

```js
solutionTo(4);
```

### startSolution

Permet de résoudre tout les niveaux

```js
startSolution();
```
