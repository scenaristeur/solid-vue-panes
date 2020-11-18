# Popock un réseau social basé sur le matching des centres d’intérêts, expertises, compétences & projets...


data-source : SemApps "L'assemblée Virtuelle vue par Popock"

![Visualisation Semapps](https://cdr.solidcommunity.net/public/semapps/Screenshot_2020-10-18%20PoPock.png)


see doc folder for more infos

Le projet Solid1 de Tim Berners Lee vise à fournir à chacun des espaces de stockage personnels avec des containers LDP2 (Linked Data Platform).

L’utilisateur peut y stocker tout type de fichier et notamment de l’information structurée sous forme de triplets au format turtle. Ces espaces de stockages sont appelés POD  (personnal online datastore) et sont accessibles via une url.

On a ainsi la possibilité de lier des ressources (fichiers) les unes aux autres qu’elles se trouvent sur le même POD ou sur un POD différent.

Ceci nous offre la possibilité d’imaginer des applications décentralisées.
Selon les spécifications de Solid, il est important de désolidariser les données et les applications. Ainsi les données des utilisateurs peuvent être manipulées par ceux-ci grâce à des applications différentes.

Un utilisateur peut par exemple utiliser l’application Plume pour poster un article sur son POD. Celui-ci étant enregistré conformément à un certain schéma pourra être lu par un autre utilisateur avec une autre application. (https://spoggy.solid.community/public/blog/2020-09-28.ttl )



# Popock

Popock vise à faciliter, pour un utilisateur, l’interaction avec ses données, à explorer les données publiques de ses amis, ou encore à parcourir des bases de connaissances telles que Semapps3, ou tout autre triplestore tel que celui de Persée4.
Popock propose, en plus de la visualisation de graphes, plusieurs fonctionnalités intéressantes basées sur le Web Sémantique :

    • un profil Solid étendu par l’ajout de centres d’intérêts (ajout futur de compétences, soft-skills, projets…)



    • un explorateur de POD similaire à un gestionnaire de fichiers



    • gestion des « amis » (foaf:kwows) exploration de leur POD, rebond vers les POD de leurs amis et ainsi de suite. Les POD exposant des centres d’intérêts communs gravitent naturellement autour des nœuds représentant ces concepts sur le graphe.

    • Popock fournit plusieurs outils de communication s’appuyant eux aussi sur Solid & le Web Sémantique :
        ◦ Chat (LongChat specification5 Solid)
        ◦ Boîte mail
        ◦ Parle / Expérimentation de Chat imbriqué
    • Un éditeur de texte, de fichiers turtle
    • Un éditeur de graphes sémantiques collaboratifs en temps réel pour faciliter la collaboration lors de la conception de données sémantiques
    • Un gestionnaire de signets/bookmarks
    • multi-language i18n
    • WebApplication : installable comme une application mobile (notifications,…), responsive avec Bootstrap
    • Technologies utilisées opensource : nodejs, vuejs, composants web, visjs, librairies de la communauté Solid et d’Inrupt...

Développements actuels :
- des outils de gouvernance partagée inspirés de l’holacratie (création de tensions, groupes, cercles, roles…)
- gestion de « petites annonces » pour partager offres & les matcher avec les besoins
- formulaires basés sur les shapes ShEx
- tutoriels d’utilisation de Popock, de création et de gestion d’un POD, de création de modules applicatifs ou un Popock personnalisé à partie de zéro

Popock : https://scenaristeur.github.io/solid-vue-panes
Contributions, idées & suggestions: https://github.com/scenaristeur/solid-vue-panes
Contact : David Faveris scenaristeur@gmail.com  06.71.57.89.14

***
Envie d’avoir un peu plus de maîtrise sur vos données ? d’interopérabilité ? D’exploration ? De partage d’expertise ? d’apporter votre expérience ?
Nous avons besoin de développeurs et de financements pour les rémunérer, former d’autres développeurs à intégrer les concepts de séparations entre les données et les applications...
Le projet Popock commencé début août avance et a maintenant besoin de retours utilisateurs, donc n’hésitez pas à tester Popock, éprouver, triturer, & à partager vos remarques en créant des « Tensions6 »


# solid-vue-panes is the code of PoPock
[Popock DEMO](https://scenaristeur.github.io/solid-vue-panes/)

# rapid git commit
```
npm run git -- "0.1.83 workspaces edition"
```

# How to buildyour first Popock module
https://smag0.blogspot.com/2020/09/create-popock-module-for-holacracy40.html


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# make a gh-pages branches

https://stackoverflow.com/questions/36782467/set-subdirectory-as-website-root-on-github-pages

create subbranch with dist folder

    comment the dist folder in the .gitignore file

git add dist -f && git commit -m "Initial dist subtree commit"

    build & publish to gh-pages

npm run build && git add .
git commit -m "my modif"
git push && git subtree push --prefix dist origin gh-pages


# todo
add blog
https://snipcart.com/blog/vuejs-blog-demo
https://github.com/snipcart/vue-blog-demo

https://popock.jimdosite.com/
https://fr.wix.com
https://fr.strikingly.com/


typeform + stripes
https://www.koudetat.co/episodes/comprendre-ta-cible-en-posant-les-bonnes-questions 52:00
paypal.me 1:00:00


### gh-pages redirect
https://github.com/rafgraph/spa-github-pages#readme
