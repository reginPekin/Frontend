| [< Previous](01%20State%20Tree.md) | [Back To React Folder](https://github.com/reginPekin/Frontend/tree/master/Dan%20Abramov%20-%20redux) | [Next >](03%20Store%20Methods.md) |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |

<h1>Reducer</h1>

State mutations should be described as a pure functions.

**The third principle**: Redux takes a previous state of the app, the action being despatched and returns the next step of the app and this function has to be pure.

This function, which takes prev and action and makes a new one is called the reducer.

<h2>Let's write one!</h2>

1. Reducer takes state and action as args ans returns the next state:

```js
function reducer(state, action) {
  return state;
}
```

2. The problem is ```action``` hasn't occure yet, so it doesn't understand us. Let's fix it: 

```js
function reducer(state, action) {
  if(action.type === 'INCREMENT') return state + 1;
  else if (action.type === 'DECREMENT') return state - 1;
}
```

3. But what if it will call for some unknown action? ```reducer``` would throw an error again! :c

This can be easily fixed: 

```js
function reducer(state, action) {
  if (action.type === 'INCREMENT') return state + 1;
  else if (action.type === 'DECREMENT') return state - 1;
  else return state;
}
```

4. All seemed to be good, yet what if state is undefined? Another error? Well, let's handle that:

```js
function reducer(state, action) {
  if (typeof state === "inderfined") return 0; // It will set initial state

  if (action.type === "INCREMENT") return state + 1;
  else if (action.type === "DECREMENT") return state - 1;
  else return state;
}
```

5. Let's make it look prettier a bit:

```js
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default: 
      return state;
  }
};
```