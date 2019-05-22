| [< Previous](05%20React%20Counter.md) | [Back To React Folder](https://github.com/reginPekin/Frontend/tree/master/Dan%20Abramov%20-%20redux) | [Next >](07%20Todo%20Reducer.md) |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------------------------- |


<h1>Avoiding Mutations</h1>

<h2>Avoiding Array Mutations</h2>

### `concat()` is good

If we want to add zero in the past array, we never want to use `push()` and `append()`: it mutates!

```js
const addCounter = list => {
  return list.concat([0]); // makes a new array
};
```

Another way to write it in ES6:

```js
const addCounter = list => {
  return [...list, 0];
};
```

### `splice()` is bad, sorry

Because it mutates an array, instead we would use:

```js
const removeCounter = (list, index) => {
  return list.slice(0, index).concat(list.slice(index + 1));
};
```

In ES6:

```js
const removeCounter = (list, index) => {
  return [...list.slice(0, index), ...list.slice(index + 1)];
};
```

### Adding

This is mutating our list, not what we really want

```js
const addIncrement = (list, index) => {
  list[index]++;
  return list;
};
```

Instead, let's try it out:

```js
const addIncrement = (list, index) => {
  return list
    .slice(0, index) // We want to take our list just before the position
    .concat([list[index] + 1]) // Insert a value
    .concat(list.slice(index + 1)); // And add the rest
};
```

In ES6:

```js
const addIncrement = (list, index) => {
  return [...list.slice(0, index), list[index] + 1, ...list.slice(index + 1)];
};
```

<h2>Avoiding Object Mutations</h2>

With `.assign()`

```js
const testToggleTodos = () => {
  const todoBefore = {
    id: 0,
    text: "Learn Redux",
    isCompleted: false
  };
  const todoAfter = {
    id: 0,
    text: "Learn Redux",
    isCompleted: true
  };
};

//This func
const toggleTodos = todo => {
  todo.isCompleted = !todo.isCompleted;
  return todo;
};
```

And this is bad, cuz it tries to mutate our Object;

Simpliest solution would be:

```js
const toggleTodos = todo => {
  return {
    id: todo.id,
    text: todo.text,
    isCompleted: !todo.isCompleted
  };
};
```

Yet we can forget to update that from time to time. This is why there are a nice ES6 method called `Object.assign()`

```js
const toggleTodos = todo => {
  return Object.assign({}, todo, {
    isCompleted: !todo.isCompleted
  });
};
```

Perfect!
