const path = require("path");

// Create path object
console.log(path.parse(__filename).base);

// Concatenate paths
// ../test/hello.html
console.log(path.join(__dirname, "test", "hello.html"));
// /Users/vinishko/Documents/Githab/Frontend/Node.js/reference/test/hello.html
