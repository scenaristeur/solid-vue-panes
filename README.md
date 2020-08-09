# solid-vue-panes

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
