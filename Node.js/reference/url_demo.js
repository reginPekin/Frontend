const url = require("url");

const myURL = new URL(
  "http://reginbegin.com:8000/hello.html?id=100&status=active"
);

// Serialized URL
console.log(myURL.href);
console.log(myURL.toString());

// Host (root domain)
console.log(myURL.host);

// Hostname (does not get port)
console.log(myURL.hostname);

// Pathname
console.log(myURL.pathname);

// Serialized query
console.log(myURL.search);

// Params object
console.log(myURL.searchParams);

// Add params
myURL.searchParams.append("abc", "123");
console.log(myURL.searchParams);

// Loop through params
myURL.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
