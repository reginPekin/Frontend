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