# React

## Introducing JSX

Consider this variable declaration:

```JS
const element = <h1>Hello, world ^.^</h1>
```

This funny tag syntax is neither a string nor HTML.

It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

JSX produces React “elements”. We will explore rendering them to the DOM in the next section. Below, you can find the basics of JSX necessary to get you started.

### Embedding Expressions in JSX

You can put any valid JavaScript expression inside the curly braces in JSX. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.

In the example below, we embed the result of calling a JavaScript function, formatName(user), into an __'h1'__ element.

```JS
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

### JSX is an Expression Too

```JS
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

### Specifying Attributes with JSX
You may use quotes to specify string literals as attributes:

```JS
const element = <div tabIndex="0"></div>;
```
You may also use curly braces to embed a JavaScript expression in an attribute:

```JS 
const element = <img src={user.avatarUrl}></img>;
```
Don’t put quotes around curly braces when embedding a JavaScript expression in an attribute. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.

### Specifying Children with JSX
If a tag is empty, you may close it immediately with __'/>'__, like XML:
```JS
const element = <img src={user.avatarUrl} />;
```
JSX tags may contain children:

```JS
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

### JSX Represents Objects
Babel compiles JSX down to __JS React.createElement()__ calls.

These two examples are identical:

```JX
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

```JS
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```
React.createElement() performs a few checks to help you write bug-free code but essentially it creates an object like this:

```JS
// Note: this structure is simplified
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

These objects are called “React elements”. You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.

## Rendering Elements

An element describes what you want to see on the screen: 

```JS
const element = <h1>Hello, world!</h1>;
```

### Rendering na Element into te DOM

Let’s say there is a <div> somewhere in your HTML file:

```JS
<div id="root"></div>
```
We call this a “root” DOM node because everything inside it will be managed by React DOM.

To render a React element into a root DOM node, pass both to ReactDOM.render():

```Js
const element = <h1>Hello, world!</h1>
ReactDOM.render(element,
document.getElementById('root'));

### Updating the Render Element 

React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

With our knowledge so far, the only way to update the UI is to create a new element, and pass it to ReactDOM.render().

Consider this tickind clock example: 

```JS
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>Now is is {new Date().toLocalTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, 
  document.getElementById('root'));
}

setInterval(tick, 1000);
```
### React only Updates What's Necessary

React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

Even though we create an element describing the whole UI tree on every tick, only the text node whose contents has changed gets updated by React DOM.

## Conponents and Props

### Function and Class Components

The simplest way to define a component is to write a JavaScript function:

```JS
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
This function is a valid React component because it accepts a single __“props”__ (which stands for properties) object argument with data and returns a React element. We call such components __“function components”__ because they are literally JavaScript functions.

You can also use an ES6 class to define a component:

```JS
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

The above two components are equivalent from React’s point of view.

### Rendering a Components 

Previously, we only encountered React elements that represent DOM tags:

```JS
const element = <div />;
```

However, elements can also represent user-defined components:

```JS
const element = <Welcome name="Sara" />;
```

When React sees an element representing a user-defined component, it passes JSX attributes to this component as a single object. We call this object __“props”__.

For example, this code renders “Hello, Sara” on the page:

```JS
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

Let’s recap what happens in this example:

* We call ReactDOM.render() with the <Welcome name="Sara" /> element.
* React calls the Welcome component with {name: 'Sara'} as the props.
* Our Welcome component returns a __'h1'Hello, Sara'/__h1' element as the result.
* React DOM efficiently updates the DOM to match __'h1'Hello, Sara'/h1'__.