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