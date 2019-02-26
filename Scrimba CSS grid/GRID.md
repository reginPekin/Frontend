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
or 
```css
.header {
    grid-column: 1 / 3;
}
```
<img src = "https://i.ibb.co/FgQcszT/2019-02-25-23-53-12.png" width = 350px>

more addition

```css
.footer {
    grid-column: 1 / -1;
}
```css

or

```css
.footer {
    grid-column: 1 / span 2;
}
```

<img src = "https://i.ibb.co/bP6jPN3/2019-02-25-23-56-14.png" width = 350px>

One more example: 
```css
.container {
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px 200px 40px;
}

.header {
    grid-column: 2 / -1;
}

.menu {
    grid-row: 1 / 3;
}

.content {
    grid-column: 2 / -1;
}

.footer {
    grid-column: 1 / -1;
}
```
<img src = "https://i.ibb.co/X79MGfQ/2019-02-26-0-51-11.png" width = 350px>

## Template areas

```css
.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto 40px;
    grid-template-areas: 
        "h h h h h h h h h h h h"
        "m c c c c c c c c c c c"
        "f f f f f f f f f f f f";
}

.header {
    grid-area: h;
}

.menu {
}

.content {
}

.footer {
}
```

Result: 
<img src = "https://i.ibb.co/vsWXnyc/2019-02-26-21-33-22.png" width = 350px>

```css
.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto 40px;
    grid-template-areas: 
        "h h h h h h h h h h h h"
        "m c c c c c c c c c c c"
        "f f f f f f f f f f f f";
}

.header {
    grid-area: h;
}

.menu {
    grid-area: m;
}

.content {
    grid-area: c;
}

.footer {
    grid-area: f;
}
```

Result: 
<img src = "https://i.ibb.co/N3fsSfC/2019-02-26-21-35-05.png" width = 350px>

Данный метод хорош тем, что позволяет легко менять расположение блоков, к примеру поменяем лишь некоторые буквы:

```css
.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto 40px;
    grid-template-areas: 
        "m h h h h h h h h h h h"
        "m c c c c c c c c c c c"
        "m f f f f f f f f f f f";
}
```

Result:

<img src = "https://i.ibb.co/jHcB1c8/2019-02-26-21-39-51.png" width = 350px>

Dots = empty space

```
grid-template-areas: 
        ". h h h h h h h . . . ."
        "m c c c c c c c c c c c"
        ". f f f f f f f f f f .";
```

<img src = "https://i.ibb.co/2Zbh0BX/2019-02-26-21-45-26.png" width = 350px>

Примечание: блоки должны быть строго прямоугольны, иначе:
```
grid-template-areas: 
        ". h h h h h h h h h h ."
        "m c c c c c c c c c c c"
        "m m . . f f f f f f f f";
```
<img src = "https://i.ibb.co/vx87Z0g/2019-02-26-21-49-58.png" width = 350px>

## Auto-fit and minimax

```css
.container {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(150px,1fr));
    grid-template-rows: repeat(2, 100px);
}
```

<img src ="https://i.ibb.co/bH80N8B/2019-02-26-22-21-07.png" width = 350px>

<img src ="https://i.ibb.co/VJdHnjc/2019-02-26-22-22-21.png" width = 350px>

<img src =" " width = 350px>

<img src =" " width = 350px>

<img src =" " width = 350px>