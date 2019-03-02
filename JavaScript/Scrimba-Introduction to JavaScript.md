# Scrimba: Introduction to JavaScript

## Variables

```js
let example = 'Dylan';
example = 'Israel';
console.log(example);
// result: Israel
```

```js
const example = 'Dylan';
example = 'Israel';
colsole.log(example);
// Error
```

## String

```js
let firstName = 'Dylan';
let lastName = 'Israel';



console.log(firstName + ' ' + lastName);
// Dylan Israel
```

```js
let firstName = 'Dylan';
let lastName = 'Israel';



console.log(firstName + lastName);
// DylanIsrael
```

```js
let firstName = 'Dylan';
let lastName = 'Israel';



console.log(`${firstName} ${lastName}`);
// Dylan Israel

```

```js
let firstName = 'Dylan';
let lastName = 'Israel';



console.log(`                    ${firstName} ${lastName}`.length);
// 32
```

```js
let firstName = 'Dylan';
let lastName = 'Israel';



console.log(`                    
${firstName} ${lastName}            `.trim().length);
// 12
```

Article about string interpolation: [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

```js
let firstName = 'Dylan';
let lastName = 'Israel';



console.log(`${firstName} ${lastName}`.toLowerCase());
// dylan israel
```

```js
let firstName = 'Dylan';
let lastName = 'Israel';



console.log(`${firstName} ${lastName}`.split(' '));
// ["Dylan", "Israel"]
```

```js
let firstName = 'Dylan';
let lastName = 'Israel';



console.log(`${firstName} ${lastName}`.split(''));
// ["D", "y", "l", "a", "n", " ", "I", "s", "r", "a", "e", "l"]
```

## Numbers

```js
let example = "7.77";

console.log(typeof(example))
console.log(typeof(parseInt(example)));
console.log(parseInt(example));
// string
// number
// 7
```

```js
let example = '7.77';

console.log(typeof(parseFloat(example)));
console.log(parseFloat(example));
// number
// 7.77
```

```js
let example = 7.77;

console.log(example.toFixed(5));
// 7.77000
```

```js
let example = 7.77;

console.log(example.toFixed(1));
// 7.8
```

## Boolean

```js
let example1 = false;

console.log(Boolean(example1))
// false
```

```js
let example1 = true;

console.log(Boolean(example1))
// true
```

```js
let example1 = 666;

console.log(Boolean(example1))
// true
```

```js 
let example1 = false;
let example2 = true;
let example3 = null;
let example4 = undefined;
let example5 = '';
let example6 = NaN;
let example7 = -5;
let example8 = 0;

console.log(Boolean(example1));
console.log(Boolean(example2));
console.log(Boolean(example3));
console.log(Boolean(example4));
console.log(Boolean(example5));
console.log(Boolean(example6));
console.log(Boolean(example7));
console.log(Boolean(example8));
/*
>false
>true
>false
>false
>false
>false
>true
>false
*/
```

## Arrays

```js
let example1 = [5, 7, 6];
console.log(example1)
// [5, 7, 6]

example1.push(8, 9, 10);
console.log(example1)
// [5, 7, 6, 8, 9, 10]

example1.pop(); // The pop() method removes the last element from an array and returns that element. 
console.log(example1)
// [5, 7, 6, 8, 9]

example1[0] = 1;
console.log(example1)
// [1, 7, 6, 8, 9]

example1.forEach((element) => {
    console.log(element)
});
/* 
>1
>7
>6
>8
>9 
*/
```

Interesting moment: 
 ```js
 let example1 = ['Dylan', 5, true];

let example2 = example1;

example2.push(11);

console.log(example1);
console.log(example2);

/* 
["Dylan", 5, true, 11]
["Dylan", 5, true, 11]  – the same meaning
*/
 ```

And how can you solve it: 
```js
let example1 = ['Dylan', 5, true];

let example2 = [...example1];

example2.push(11);

console.log(example1);
console.log(example2);
/*
["Dylan", 5, true]
["Dylan", 5, true, 11]
*/
```


Or: 
```js
let example1 = ['Dylan', 5, true];

let example2 = example1.map((element) => {
   return element; 
});

example2.push(11);

console.log(example1);
console.log(example2);

/*
["Dylan", 5, true]
["Dylan", 5, true, 11]
*/
```

## Objects

```js
let example1 = {
    firstName: 'Dylan'
};

let example2 = example1;

example2.lastName = 'Israel';

console.log(example1);
console.log(example2);

/*
{firstName: "Dylan", lastName: "Israel"}
{firstName: "Dylan", lastName: "Israel"}
*/
```

But: 

```js
let example1 = {
    firstName: 'Dylan'
};

let example2 = Object.assign({}, example1);

example2.lastName = 'Israel';

console.log(example1);
console.log(example2);
/*
{firstName: "Dylan"}
{firstName: "Dylan", lastName: "Israel"}
*/
```

## Relational Operators

```js 

let example1 = 10;
let example2 = '10';

console.log(typeof example1);
console.log(typeof example2);
console.log(example1 == example2);
console.log(example1 === example2);
/*
number
string
true
false
*/
```

```js
let example1 = 5 === 5;
let example2 = 5 == '5';
let example3 = 6 != '6';
let example4 = 7 !== '7';

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4); 
/*
true
true
false
true
*/
```

## Increment & Decrement

```js
let example1 = 13;

example1 -= 5;
console.log(example1);

example1 += 10;
console.log(example1);

example1 *= 3;
console.log(example1);

example1 /= 2;
console.log(example1);

example1 %= 10;
console.log(example1);
/*
8
18
54
27
7
*/
```

One more interesting moment: 

```js
let example1 = 5;
example1++;

console.log(example1);

let example2 = 5;
++example2;

console.log(example2);
/*
6
6
*/
```

But:

```js
let example1 = 5;

console.log(example1++); // add this value after this line of code

let example2 = 5;

console.log(++example2); // add this value within the line of code

/*
5
6
*/
```
## Switch

```js
let studentAnswer = 'D';

switch(studentAnswer) {
    case 'A': 
        console.log('A is wrong.');
        break;
    case 'B' :
        console.log('B is wrong.');
        break;
    case 'C':
        console.log('C is correct.');
        break;
    default: 
        console.log('Not a real answer.');
}
// Not a reak answer.
```

## For loop

```js
let total = 0;

let numArray = [10, 20, 30, 40, 50, 60, 70, 80];

for (let i = 0; i < numArray.length; i++) {
    
    total += numArray[i];
}

console.log(total);
// 360
```

## Whilie & Do While

```js
let count = 0;

while (count < 20) {
    
    count++;
}

console.log(count);
// 20
```

```js
let count = 0;

while (true) {
    count++;
    
    if(count >= 20) {
        break;
    }
}

console.log(count);
// 20
```

```js
let count = 0;

while (false) {
    count++;
    
    if(count >= 20) {
        break;
    }
}

console.log(count);
// 0
```
What if while will be after condition: 

```js
let count = 0;

do {
    count++;
    
    if(count >= 20) {
        break;
    }
}
while (false)

console.log(count);
// 1
```

## Functions

```js
function add(num1, num2) {
    return num1 + num2;
}

console.log(add(10, 6));
console.log(add(15, 7));
console.log(add(20,2));
/*
15
22
22
*/
```