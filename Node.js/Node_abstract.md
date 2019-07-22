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

### fs - File System

```js
// fs - File System

const fs = require("fs");
const path = require("path");

// Make folder
fs.mkdir(path.join(__dirname, "/test"), {}, err => {
  if (err) throw err;
  console.log("Folder created...");
});

// Create and write to file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello, Vanya!",
  err => {
    if (err) throw err;
    console.log("File written to...");
  }
);
// Hello.txt: "Hello, Vanya!"
// Terminal: File written to...

// File aapend
fs.appendFile(path.join(__dirname, "/test", "hello.txt"), " Bzzzz", err => {
  if (err) throw err;
  console.log("File written to...");
});
// Hello.txt:"Hello, Vanya! Bzzzz"
// Terminal: File written to...

// Read file
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
// Terminal: Hello, Vanya! Bzzzz

// Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "bzzzz.txt"),
  err => {
    if (err) throw err;
    console.log("File renamed...");
  }
);
// Hello.txt -> bzzzz.txt
```

### os - Operation System

```js
const os = require("os");

// Platform
console.log(os.platform());
// darwin

// CPU Arch
console.log(os.arch());
// x64

// CPU Core Info
console.log(os.cpus());

// Free memory
console.log(os.freemem());
// 1920442368

// Total memory
console.log(os.totalmem());
// 8589934592

// Home dir
console.log(os.homedir());
// /Users/vinishko

// Uptime
console.log(os.uptime());
// 1096240
```

### URL parametres

```js
const url = require("url");

const myURL = new URL(
  "http://reginbegin.com:8000/hello.html?id=100&status=active"
);

// Serialized URL
console.log(myURL.href);
console.log(myURL.toString());
// http://reginbegin.com:8000/hello.html?id=100&status=active

// Host (root domain)
console.log(myURL.host);
// reginbegin.com:8000

// Hostname (does not get port)
console.log(myURL.hostname);
// reginbegin.com

// Pathname
console.log(myURL.pathname);
// /hello.html

// Serialized query
console.log(myURL.search);
// ?id=100&status=active

// Params object
console.log(myURL.searchParams);
// URLSearchParams { 'id' => '100', 'status' => 'active' }

// Add params
myURL.searchParams.append("abc", "123");
console.log(myURL.searchParams);
// URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }

// Loop through params
myURL.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
// id: 100
// status: active
// abc: 123
```

### Event

```js
const EventEmmiter = require("events");

// Create class
class MyEmmiter extends EventEmmiter {}

// Init object
const myEmmiter = new MyEmmiter();

// Event listener
myEmmiter.on("event", () => console.log("Event Fired!"));

// Init event
myEmmiter.emit("event");
```

### Logger.js

```js
const EventEmitter = require("events");
const uuid = require("uuid");
// uuid - universally unique identifier

console.log(uuid.v4()); // e6111790-4bb7-48c9-876a-71501e0ac062

console.log(uuid.v4()); // e4804f54-a34d-4730-9767-0c23779e02eb
```

### Event example

logger.js >

```js
const EventEmitter = require("events");
const uuid = require("uuid");
// uuid - universally unique identifier

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit("message", { id: uuid.v4(), msg });
  }
}

module.exports = Logger;
```

code.js >

```js
const Logger = require("./logger");

const logger = new Logger();

logger.on("message", data => console.log("Called Listener:", data));
logger.log("Hello world!");

// Called Listener: { id: '38d65350-1490-46af-a6a4-6e873572cc5b',
//  msg: 'Hello world!' }
```
