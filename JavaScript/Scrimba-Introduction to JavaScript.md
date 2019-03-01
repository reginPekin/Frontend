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