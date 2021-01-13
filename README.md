# initialyzer-design-system

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


| Component | property | value  |
| :-----: | :-: | :-: |
| Title | text | text to display |
|  | type | h1-h6 |
