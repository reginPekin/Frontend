# Learn CSS grig

## First step 

```html
<html>
    <head>
        <link rel="stylesheet" href="basic.css">
        <style>
            .container {
                display: grid;
                grid-template-columns: 100px auto 100px; /* three column */
                grid-template-rows: 50px 50px;
                grid-gap: 3px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
        </div>
    </body>
</html>
```

<img src="https://i.ibb.co/N9vtFRW/2019-02-25-23-23-18.png" width = 350px>

Let look at the ```.container```:
* ```display:grid``` - An HTML element becomes a grid container by setting the display property to grid or inline-grid.
* ```grid-template-columns: values``` - defines how many columns and how wide we want them to be
* ```grid-template-rows: values``` - defines the number of raws and they height
* ```grid-gap: value``` - makes gabes between the items;
 

 ## Fraction units and repeat

With CSS Grid Layout, we get a new flexible unit: the Fr unit. Fr is a fractional unit and 1fr is for 1 part of the available space. 
Fraction unit - ```1fr```

```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50px 50px;
    grid-gap: 3px;
}
```

or the same result with repeat:

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 50px);
    grid-gap: 3px;
}
```

or:
```css
.container {
    display: grid;
    grid-template: repeat(2, 50px) / repeat(3, 1fr);
    grid-gap: 3px;
}
```
<img src = "https://i.ibb.co/DY2fMpL/2019-02-25-23-29-40.png" width = 350px>

```css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 50px 50px;
    grid-gap: 3px;
}
```
<img src = "https://i.ibb.co/ZNCn8Y5/2019-02-25-23-30-18.png" width = 350px>


## Position items

HTML code:
```html
<html>
    <head>
        <link rel="stylesheet" href="index.css">
        <link rel="stylesheet" href="basic.css">
    </head>
    <body>
        <div class="container">
            <div class="header">HEADER</div>
            <div class="menu">MENU</div>
            <div class="content">CONTENT</div>
            <div class="footer">FOOTER</div>
        </div>
    </body>
</html>
```

```css
.container {
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 40px 200px 40px;
}
```

<img src = "https://i.ibb.co/N2wTc1g/2019-02-25-23-51-30.png" width = 350px>

if we add

```css
.header {
    grid-column-start: 1;
    grid-column-end: 3;
}
```
<img src = "https://i.ibb.co/FgQcszT/2019-02-25-23-53-12.png" width = 350px>