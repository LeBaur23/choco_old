



> HOW TO GIVE CLASSES


1) FILES NAME must be like:
              xxxx_page.vue (main_page.vue)
2) CLASS NAMES of page must be like:
xxxx-page (main-page )  ===> {
         bem for page classes will add like following:
          1) xxxx--page--yyy (main-page-wrapper -> for blocks);
          2) xxxx--page__yyy
          3) xxxx--page__yyy-active
}


> HOW TO CREATE ICONS
1) add svg file to path: 'static/icons'
2) register icon in choco-icons.js on path '/src/choco-icons.js'
  2.1) add name and path to svg file
3) use it using <chocomart-icon></chocomart-icon> tag:
  3.1) to add icon add :icon props like : <chocomart-icon :icon="'some_icon'"></chocomart-icon>
  3.2) to change size :font_size props like: <chocomart-icon :icon="'some_icon'" :font_size="'XXpx'"></chocomart-icon>
  3.3) to change color :color props like: <chocomart-icon :icon="'some_icon'" :font_size="'XXpx'" :color="'someColor'"></chocomart-icon>



# new_chocomart_front

> A Vue.js project

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

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
