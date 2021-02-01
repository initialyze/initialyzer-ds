# initialyzer-design-system

## Getting Started
<br/>

install dependency node modules
```
npm install
```

Bootstrap all the web-components

```
npm run build
```

Now open `index.html` from `/src/` in browser and you can test your web component's markup

<br/>

## Integrate web component in other projects

<br/>

Bundle of web components that can be imported in your main.js. For example,

```
// main.js

@import 'initilayzer-ds/web-component/src/title/title'
```

and in markup add custom element where you want to display
```
// In your markup 

<title-web-cmp 
    class="cmp-web-title"
    text="Initialyze Design System" 
    type="h1">
</title-web-cmp>

```
## Compoent property mapping

<br/>


| Component | property | value  |
| :-----: | :-: | :-: |
| Title | text | text to display |
|  | type | h1-h6 |
