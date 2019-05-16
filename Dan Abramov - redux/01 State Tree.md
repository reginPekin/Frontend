| [Back To React Folder](https://github.com/reginPekin/Frontend/tree/master/Dan%20Abramov%20-%20redux) | [Next >](2%20Reducer.md) |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------- |

<h1>Two principles and functions</h1>

<h2>State tree</h2>

**First rule of Redux: to represent the whole state of application as a single JS object**

All mutations are explicit

*Example:* with one counter we just hold it's value in state and it's fine, however with several counters we want to give each one an ID in state to make sure which is being changed

If we have a todo app, we want to store all aspects in one object, so if a task is done, it is cheched within an array of this task within an array of all tasks. Tt is called a *state tree*

<h2>Describing state changes with actions</h2>

It is a js object, the minimum representation of state:
```js
[object Object] { /// THIS IS STATE TREE
  type: 'INCREMENT' // THIS IS ONE ACTION
}
```

for counter we need only ```increment``` and ```decrement``` for adding or substracting.

For several we have to add an ```id``` to every counter.

**The second principle of Redux: the state tree is read only, instead you need to despatch an action**

<h2>Pure and impure functions</h2>

The pure functions return values depending only on their arguments. This functions don’t have any absorbable side effect. The pure function just calculate new value. It can be used to create new elements, but in can’t change arguments.

Impure function may call the database or network, the may have side effects, they may overwrite the value that you passed to them.

Redux needs pure functions.