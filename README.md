# codeandrew-github

> A Vue.js template

### Dependencies
- Vue Router
- Sass
- BootstrapVue
- Vuex
- VueParticles



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

#build for github pages must have build first
npm run deploy
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



### Notes in configuration :
-  In config/index.js changed assetsPublicPath to docs for github pages
```
assetsPublicPath: '/docs/',
```

- In VueParticles include this in webpack.base.conf.js
```
{
  test: /\.js$/,
  loader: 'babel-loader',
  include: [resolve('src'), resolve('test'), resolve('node_modules/vue-particles')]
},
```
