# React

## Table of Contents

1. [Introducing JSX](#introJSX)
2. [Rendering Elements](#render)
3. [Components and Props](#props)
4. [State and Lifecycle](#state)
5. [Handling Events](#HE)
6. [Conditional Rendering](#CR)
7. [Lists and Keys](#l&k)
8. [Forms](#forms)
9. [Lifting State Up](#LSU)
10. [Composition vs Inheritance](#CvsI)
11. [Thinking In React](#TiR)


<a name="introJSX"></a>
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

<a name="render"></a>
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

<a name="props"></a>
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

### Extracting Components
Don’t be afraid to split components into smaller components.

For example, consider this Comment component:

```JS
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

It accepts author (an object), text (a string), and date (a date) as props, and describes a comment on a social media website.

This component can be tricky to change because of all the nesting, and it is also hard to reuse individual parts of it. Let’s extract a few components from it.

First, we will extract Avatar:

```JS
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />

  );
}
```

The Avatar doesn’t need to know that it is being rendered inside a Comment. This is why we have given its prop a more generic name: user rather than author.

We recommend naming props from the component’s own point of view rather than the context in which it is being used.

We can now simplify Comment a tiny bit:

```JS
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```
Next, we will extract a UserInfo component that renders an Avatar next to the user’s name:

```JS
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
//This lets us simplify Comment even further:

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be a reusable component.

### Props are Read-Only
Whether you declare a component as a function or a class, it must never modify its own props. Consider this sum function:

```JS
function sum(a, b) {
  return a + b;
}
```

Such functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs.

In contrast, this function is impure because it changes its own input:

```JS
function withdraw(account, amount) {
  account.total -= amount;
}
```

React is pretty flexible but it has a single strict rule:

**All React components must act like pure functions with respect to their props.**

<a name="state"></a>
## State and Lifecycle

Consider the ticking clock example from one of the previous sections. In Rendering Elements, we have only learned one way to update the UI. We call __ReactDOM.render()__ to change the rendered output:

```JS
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
```

In this section, we will learn how to make the Clock component truly reusable and encapsulated. It will set up its own timer and update itself every second.

We can start by encapsulating how the clock looks:

```JS
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
```
However, it misses a crucial requirement: the fact that the __Clock__ sets up a timer and updates the UI every second should be an implementation detail of the __Clock__.

Ideally we want to write this once and have the __Clock__ update itself:

```JS
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

To implement this, we need to add “state” to the __Clock__ component.

State is similar to props, but it is private and fully controlled by the component.

We mentioned before that components defined as classes have some additional features. Local state is exactly that: a feature available only to classes.

### Converting a Function to a Class

You can convert a function component like Clock to a class in five steps:

* Create an ES6 class, with the same name, that extends React.Component.

* Add a single empty method to it called __render()__.

* Move the body of the function into the *render()* method.

* Replace *props* with this.props in the *render()* body.

* Delete the remaining empty function declaration.

```JS
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

*Clock* is now defined as a class rather than a function.

The *render* method will be called each time an update happens, but as long as we render <Clock /> into the same DOM node, only a single instance of the *Clock* class will be used. This lets us use additional features such as local state and lifecycle methods.

### Adding Local State to a Class

We will move the date from props to state in three steps:

1. Replace *this.props.date* with *this.state.date* in the *render()* method:

```JS
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

2. Add a class constructor that assigns the initial *this.state*:

```JS
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

Note how we pass *props* to the base 


constructor:

```JS
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
```

Class components should always call the base constructor with *props*.

3. Remove the *date* prop from the <Clock /> element:

```JS
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

We will later add the timer code back to the component itself.

The result looks like this:

```JS
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

### Adding Lifecycle Methods to a Class

In applications with many components, it’s very important to free up resources taken by the components when they are destroyed.

We want to set up a timer whenever the *Clock* is rendered to the DOM for the first time. This is called “mounting” in React.

We also want to clear that timer whenever the DOM produced by the *Clock* is removed. This is called “unmounting” in React.

We can declare special methods on the component class to run some code when a component mounts and unmounts:

```JS
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

These methods are called __“lifecycle methods”__.

The *componentDidMount()* method runs after the component output has been rendered to the DOM. This is a good place to set up a timer:

```JS
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
```

Note how we save the timer ID right on *this*.

While *this.props* is set up by React itself and *this.state* has a special meaning, you are free to add additional fields to the class manually if you need to store something that doesn’t participate in the data flow (like a timer ID).

We will tear down the timer in the *componentWillUnmount()* lifecycle method:

```JS
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
```

Finally, we will implement a method called *tick()* that the *Clock* component will run every second.

It will use *this.setState()* to schedule updates to the component local state:

```JS
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

Now the clock ticks every second.

Let’s quickly recap what’s going on and the order in which the methods are called:

1. When <Clock /> is passed to *ReactDOM.render()*, React calls the constructor of the *Clock* component. Since *Clock* needs to display the current time, it initializes *this.state* with an object including the current time. We will later update this state.

2. React then calls the *Clock* component’s *render()* method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the *Clock*’s render output.

3. When the *Clock* output is inserted in the DOM, React calls the *componentDidMount()* lifecycle method. Inside it, the *Clock* component asks the browser to set up a timer to call the component’s *tick()* method once a second.

4. Every second the browser calls the tick() method. Inside it, the *Clock* component schedules a UI update by calling *setState()* with an object containing the current time. Thanks to the *setState()* call, React knows the state has changed, and calls the *render()* method again to learn what should be on the screen. This time, *this.state.date* in the *render()* method will be different, and so the render output will include the updated time. React updates the DOM accordingly.

5. If the *Clock* component is ever removed from the DOM, React calls the *componentWillUnmount()* lifecycle method so the timer is stopped.

<a name="HE"></a>

## Handling Events

Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:

* React events are named using camelCase, rather than lowercase.

* With JSX you pass a function as the event handler, rather than a string.

For example, the HTML:

```JS
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

is slightly different in React:

```JS
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

Another difference is that you cannot return *false* to prevent default behavior in React. You must call *preventDefault* explicitly. For example, with plain HTML, to prevent the default link behavior of opening a new page, you can write:

```JS
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
```
In React, this could instead be:

```JS
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

Here, *e* is a synthetic event. React defines these synthetic events according to the W3C spec, so you don’t need to worry about cross-browser compatibility. See the SyntheticEvent reference guide to learn more.



<a name="CR"></a>

<a name="l&k"></a>

<a name="forms"></a>

<a name="LSU"></a>

<a name="CvsI"></a>

<a name="TiR"></a>
