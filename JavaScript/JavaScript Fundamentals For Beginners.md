# JavaScript Fundamentals For Beginners

## What can I do with JavaScript?

* Put content in an HtML page on the fly
* Make Wabpage Responsive
* Detect a Users Browser & Other Info
* Create Cookies
* Valiade Forms
* Create Animations, Slideshows, Scrollers, etc
* Build Apps with FavaScript Frameworks

How to link JS script file:

```html
<script scr = "JSfile.js"></script>
```

or 

```html
<script>
    //letters, numbers, underscore, dollar signs

    // camel case
    var myFavoriteNumber;

    // partial case
    var MyFavoriteNumber;

    // underscore
    var my_favoirite_number; 
</script>
```

## Arrays

```html
<script>
    var colors = ['red','blue','green'];

    alert(color[0]); // red
    alert(color[1]); // blue
    alert(color[2]); // green
    alert(color[3]); // underfied
</script>
```

```html
<script>
    var colors = new Array('red', 'yellow', 'orange');

    colors[3] = 'green';

    color.push('purple');
</script>
```

```html
<script>
    var numbers = [5, 77, 6, 43];

    alert(numbers[1]+numbers[2]);
    alert(numbers.length); // length of array = 4
    alert(numbers.solrt()); // 5,6,43,77
    alrt(number.reverse()); // 43, 6, 77, 5

</script>
```