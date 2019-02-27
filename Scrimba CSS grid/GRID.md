# Learn CSS grig

## Table of Contents

1. [First step](#firststep)
2. [Fraction units and repeat](#repeat)
3. [Position items](#items)
4. [Template areas](#areas)
5. [Auto-fit and minmax](#AaF)
6. [Auto-fit vs auto-fill](#auto)
7. [Minmax](#minmax)
8. [Implicit rows](#implicit)
9. [An awesome image grid](#imagegrid)
10. [Named lines] (#namedlines)

<a name="firststep"></a>

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
 

<a name="repeat"></a>
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

<a name="items"></a>
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

<a name="areas"></a>
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
<a name="AaF"></a>

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

<img src ="https://i.ibb.co/VJdHnjc/2019-02-26-22-22-21.png" width = 400px>

<img src ="https://i.ibb.co/FB8WMJV/2019-02-26-22-25-03.png" width = 500px>

<a name="auto"></a>

## Auto-fit vs auto-fill 

```auto-fill``` **FILLS** the row with as many columns as it can fit. So it creates implicit columns whenever a new column can fit, because it's trying to FILL the row with as many columns as it can. The newly added columns can and may be empty, but they will still occupy a designated space in the row.

```auto-fit``` **FITS** the CURRENTLY AVAILABLE columns into the space by expanding them so that they take up any available space. The browser does that after FILLING that extra space with extra columns (as with auto-fill ) and then collapsing the empty ones.

Visual example: 
<img src = "https://i.ibb.co/NCM1WXS/2019-02-27-5-28-46.png" width = 350px>

Additional resource: [Useful YouTube video "CSS GRID: auto-fit and auto-fill"](https://www.youtube.com/watch?v=asfqwwrXis4)

<a name="minmax"></a>

## Minmax
Two examples without minmax and with minmax:

```css
.container {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, 100px);
    grid-template-rows: repeat(2, 100px);
}

```
<img src = "https://i.ibb.co/n6LwB2q/2019-02-27-5-45-21.png" width = 350px>

```css
.container {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-rows: repeat(2, 100px);
}
```

<img src = "https://i.ibb.co/R9vfv8b/2019-02-27-5-46-16.png" width = 350px>

<a name = "implicit"></a>

## Implicit rows

Wrong way: 

```css
.container {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-template-rows: 100px 100px;
}
```
Cool way: 
<img src = "https://i.ibb.co/zHgj0p6/2019-02-27-16-30-57.png" width = 350px>

```css
.container {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-auto-rows: 100px;
}
```
<img src = "https://i.ibb.co/Bq4WFr4/2019-02-27-16-31-31.png" width = 350px>

<a name = "image_grid"></a>

## An awesome image grid

```html
<html>
    <head>
        <link rel="stylesheet" href="index.css">
        <link rel="stylesheet" href="basic.css">
    </head>
    <body>
        <div class="container">
            <div><img src="img/normal1.jpg"/></div>
            <div class="vertical"><img src="img/vertical1.jpg"/></div>
            <div class="horizontal"><img src="img/horizontal1.jpg"/></div>
            <div><img src="img/normal2.jpg"/></div>
            <div><img src="img/normal3.jpg"/></div>
            <div class="big"><img src="img/big1.jpg"/></div>
            <div><img src="img/normal4.jpg"/></div>
            <div class="vertical"><img src="img/vertical2.jpg"/></div>
            <div><img src="img/normal5.jpg"/></div>
            <div class="horizontal"><img src="img/horizontal2.jpg"/></div>
            <div><img src="img/normal6.jpg"/></div>
            <div class="big"><img src="img/big2.jpg"/></div>
            <div><img src="img/normal7.jpg"/></div>
            <div class="horizontal"><img src="img/horizontal3.jpg"/></div>
            <div><img src="img/normal8.jpg"/></div>
            <div class="big"><img src="img/big3.jpg"/></div>
            <div><img src="img/normal9.jpg"/></div>
            <div class="vertical"><img src="img/vertical3.jpg"/></div>
        </div>
    </body>
</html>
```

```css
.container {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 75px;
}

.horizontal {}

.vertical {}

.big {}
}
```

<img src = "https://i.ibb.co/DCSyhSv/2019-02-27-17-20-02.png" width = 350px>

```css
.container {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 75px;
}

.horizontal {
    grid-column: span 2;
}
```

<img src = "https://i.ibb.co/Q8Jjg4R/2019-02-27-17-24-23.png" width = 350px>

```css
.vertical {
    grid-row: span 2;
}
```

<img src = "https://i.ibb.co/4Mf1LVQ/2019-02-27-17-33-59.png" width = 350px>

```css
.big {
    grid-column: span 2;
    grid-row: span 2;
}
```

<img src = "https://i.ibb.co/2ymPxTz/2019-02-27-17-35-18.png" width = 350px>


If we add a new command to ```.contaiber```:

```css
grid-auto-flow: dense;
```

we will get: 

<img src = "https://i.ibb.co/Lvnv6vX/2019-02-27-17-39-01.png" width = 350px>

<a name = "namedlines"></a>

## Named lines

```css
.container {
    height: 100%; 
    display: grid;
    grid-gap: 3px;
    grid-template-columns: [main-start] 1fr [content-start] 5fr [content-end main-end];
    grid-template-rows: [main-start] 40px [content-start] auto [content-end] 40px [main-end]; 
}

.header {
    grid-column: main;
}

.menu {}

.content {
    grid-area: content;
}

.footer {
    grid-column: main;
}
```

<img src = "https://i.ibb.co/NpL66ps/2019-02-27-19-36-38.png" width = 350px>

Here you can find more useful and clearer information: [Layout using named grid lines
](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)