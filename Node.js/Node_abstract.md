# Node.js Crash Course

## Advantages of Node

⋅⋅⋅Fast, efficient and highly scalable
⋅⋅⋅Event driven, non-blocking I/O model
⋅⋅⋅Popular in the industry
⋅⋅⋅Same language on the front and back end (JS)

## Non-blocking I/O

⋅⋅⋅Works on a single thread using non-blocking I/O calls
⋅⋅⋅Supports tens of thousands concurrent connections
⋅⋅⋅Optimizes throughput & scalability in apps with many I/O operations
⋅⋅⋅All of this makes Node.js apps very fast & efficient

## Best types of projects for node

⋅⋅⋅REST API & Microservices
⋅⋅⋅Real Time Services (Chat, Live Update)
⋅⋅⋅CRUD Apps - Blogs, Shopping Carts, Social Networks
⋅⋅⋅Tools & Utilities

Short Answer: _Anything that is not CPU intensive_

### Preparation to work

`npm init`
`npm install uuid`
`npm install -D nodemon`

Write code in the _fileName_ file and run it in terminal:
`node *fileName*`

### First example (with object)

person.js >

```js
const person = {
  name: "Valetova Regina",
  age: 21
};

module.exports = person;
```

code.js >

```js
const person = require("./person");

console.log(person);
//{ name: 'Valetova Regina', age: 21 }
```

### Second example (with class)

person.js >

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}

module.exports = Person;
```

code.js >

```js
const Person = require("./person");

const person1 = new Person("Regina", 21);

person1.greeting();
```

### Path

The path module provides utilities for working with file and directory paths. It can be accessed using:

```js
const path = require("path");

console.log(__filename);
// Users/vinishko/Documents/Githab/Frontend/Node.js/reference/path_demo.js

//Base file name
console.log(path.basename(__filename));
// path_demo.js

// Directory name
console.log(path.dirname(__filename));
// Users/vinishko/Documents/Githab/Frontend/Node.js/reference

// File extension
console.log(path.extname(__filename));
// .js

// Create path object
console.log(path.parse(__filename).base);

// Concatenate paths
// ../test/hello.html
console.log(path.join(__dirname, "test", "hello.html"));
// /Users/vinishko/Documents/Githab/Frontend/Node.js/reference/test/hello.html
```
