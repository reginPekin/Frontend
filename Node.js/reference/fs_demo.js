// fs - File System

const fs = require("fs");
const path = require("path");

// Read file
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "bzzzz.txt"),
  err => {
    if (err) throw err;
    console.log("File renamed...");
  }
);
