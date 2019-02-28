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

## Loops
__FOR__:

```html
<script>
    for(var 1 = 0; i <= 10; i++){
        console.log(i);
    }  // result: 0 1 2 3 4 5 6 7 8 9 10
</script>
```

__WHILE__:

```html
<script>
    var i = 1;
    while(i < 10) {
        console.log(i);
        i++;
    }
</script>
```

__FOR_EACH__:

```html
<script>
    var numbers = [33, 54, 76, 34, 2, 6];

    numbers.forEach(function(number){
        console.log(number);
    });
</script>
```

## Conditionals

```html
<script>
    var var1 = 3;
    var var2 = 4;
    if(var1 == var2) && (var1 == 3){ // sign '===' means equal of 
        console.log('This is true');
    } else {
        console.log('This is false');
    } // this is false

    var var1 = 3;
    var var2 = 4;
    if(var1 == var2) || (var1 == 3){ // sign '===' means equal of 
        console.log('This is true');
    } else {
        console.log('This is false');
    } // this is true
</script>
```
```html
<script>
    var fruit = 'apple';

    switch(fruit) {
        case "banana":
            alert('I hate bananas');
            break;
        case "apple":
            alert('I love apples');
            break;
        case "orange":
            alert('Oranges are ok');
            break;
        default:
            alert('I love all other fruits');
            break;
    }
</script>
```

## Object

```html
<script>
// Object literal

var person = {
    firstName: 'Brad',
    lastName: 'Traversy',
    age: 34;
    children: ['Brianna', 'Nicolas']
    address: {
        street: '555 street',
        city: 'Boston', 
        state: 'MA'
    }
    fullName: function(){
        retirn: this.firstname + " " + this.lastName;
    }
}

console.log([person.address.state])
</script>
'''


'''html
<script>
// Object Cunstuctor

var apple = new Object()
apple.color = 'red';
apple.shape = 'round';

apple.describe = function(){
    return 'An apple is the color ' + this.color + ' and is the shape' + this.shape;
}

console.log(apple.describe);
</script>
```


```html
<script>
// Constructor Pattern
function Fruit(name, color, shape){
    this.name = name;
    this.color = color;
    this.shape = shape;
    this.describe = function(){
    return 'A ' + this.name + 'is the color' + this.color + ' and is the shape' + this.shape;
}
}

var apple = new fruit('apple','red','round');

var melon = new Fruit('melon', 'green', 'round');
console.log(melon.describe());
</script>
```

More objects:

```html
<script>
var users = [
    {
        name: 'John Doe',
        age: 30
    },
    {
        name: 'Regin Begin',
        age: 21
    },
    {
        name: 'Ivan Divan',
        age: 20
    }
];
console.log(users[0]);
</script>
```

## Events

```html
<div class="container">
<button onclick = "doClick()">Click Me</button>
</div>

<script>
function doClick(){
    alert('You Clicked!');
}
</script>
```

