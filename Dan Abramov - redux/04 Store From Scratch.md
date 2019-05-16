<h1>Implementing Store From Scratch</h1>

Instead of ```import { createStore } from 'redux'``` we will write our own.

We know arg is reducer...

```js
const createStore = reducer => {
  // We also know it keeps our state
  let state;

  // We know it has 3 methods
  const getState = () => state;

  const dispatch = action => {};

  const subscribe = listener => {};

  // And this is what we call a Redux store
  return { getState, dispatch, subscribe }; 
};
```

Because we can call subscribe several times, we need to keep out listeners: 

```js
const createStore = reducer => {
  let state;

  let listeners = [];

  const getState = () => state;

  const dispatch = action => {
    // This is how we add a state
    state = reducer(state, action);
    // We should also notify each listener about the change
    listeners.forEach(listener => listener())
  };

  const subscribe = listener => {
    // Every time it is called we want to push our new listener into the array
    listeners.push(listener);
  };

  return { getState, dispatch, subscribe };
};
```

We would also like to add unsubscribe method right in the ```subscribe```:

```js
const subscribe = listener => {
  listeners.push(listener);

  return () => {
    listeners = listeners.filter(l => l !== listener);
  };
};
```

Finally we would like to return initial value, so we just ```dispatch``` before store is returned:

```js
dispatch({});
return { getState, dispatch, subscribe };
```