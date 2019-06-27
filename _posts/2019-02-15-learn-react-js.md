---
title: Learn React.js in 5 minutes
tags: [React, JavaScript, Web Development]
style: border
color: primary
description: A quick introduction to the popular JavaScript library.
---

Source: [freecodecamp](https://medium.freecodecamp.org/learn-react-js-in-5-minutes-526472d292f4)

This tutorial will give you a basic understanding of React.js by building a very simple application. I’ll leave out everything which I don’t think is core.

## The setup

When getting started with React, you should use the simplest setup possible: an HTML file which imports the `React` and the `ReactDOM` libraries using script tags, like this:

```html
<html>
<head>
<script src="https://unpkg.com/react@15/dist/react.min.js"> </script><script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js">
</script>
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">

    /*
    ADD REACT CODE HERE
    */

    </script>
</body>
</html>
```

We’ve also imported Babel, as React uses something called JSX to write markup. We’ll need to transform this JSX into plain JavaScript, so that the browser can understand it.

There are more two things I want you to notice:

1. The `<div>` with the id of `#root`. This is the entry point for our app. This is where our entire app will live.
1. The `<script type="text/babel">` tag in the body. This is where we’ll write our React.js code.

If you want to experiment with the code, check out this Scrimba playground.

## Components

Everything in React is a component, and these usually take the form of JavaScript classes. You create a component by extending upon the `React-Component` class. Let’s create a component called `Hello`.

```javascript
class Hello extends React.Component {
    render() {
        return <h1>Hello world!</h1>;
    }
}
```

You then define the methods for the component. In our example, we only have one method, and it’s called `render()`.

Inside `render()` you’ll return a description of what you want React to draw on the page. In the case above, we simply want it to display an `h1` tag with the text _Hello world!_ inside it.

To get our tiny application to render on the screen we also have to use `ReactDOM.render()`:

```javascript
ReactDOM.render(
    <Hello />, 
    document.getElementById("root")
);
```

So this is where we connect our `Hello` component with the entry point for the app (`<div id="root"></div>`). It results in the following:

![](https://cdn-images-1.medium.com/max/1000/1*T-bmSzg0KlijyB3dG1M-ow.png)

The HTML’ish syntax we just looked at (`<h1>` and `<Hello/>`) is the JSX code I mentioned earlier. It’s not actually HTML, though what you write there does end up as HTML tags in the DOM.

The next step is to get our app to handle data.

## Handling data

There are two types of data in React: props and state. The difference between the two is a bit tricky to understand in the beginning, so don’t worry if you find it a bit confusing. It’ll become easier once you start working with them.

The key difference is that state is private and can be changed from within the component itself. Props are external, and not controlled by the component itself. It’s passed down from components higher up the hierarchy, who also control the data.

{% include elements/highlight.html text="A component can change its internal state directly. It can not change its props directly." %}

Let’s take a closer look at props first.

## Props

Our `Hello` component is very static, and it renders out the same message regardless. A big part of React is reusability, meaning the ability to write a component once, and then reuse it in different use cases — for example, to display different messages.

To achieve this type of reusability, we’ll add props. This is how you pass props to a component:

```javascript
ReactDOM.render(
    <Hello message="my friend" />,
    document.getElementById("root")
);
```

This prop is called `message` and has the value “my friend”. We can access this prop inside the Hello component by referencing `this.props.message`, like this:

```javascript
class Hello extends React.Component {
    render() {
        return <h1>Hello {this.props.message}!</h1>;
    }
}
```

As a result, this is rendered on the screen:

![](https://cdn-images-1.medium.com/max/1000/1*M0-2Ct0K3SARZLSwIzgdJw.png)

The reason we’re writing {this.props.message} with curly braces is because we need to tell the JSX that we want to add a JavaScript expression. This is called **escaping**.

So now we have a reusable component which can render whatever message we want on the page. Woohoo!

However, what if we want the component to be able to change its own data? Then we have to use state instead!

## State

The other way of storing data in React is in the component’s state. And unlike props — which can’t be changed directly by the component — the state can.

So if you want the data in your app to change — for example based on user interactions — it must be stored in a component’s state somewhere in the app.

### Initializing state

To initialize the state, simply set `this.state` in the `constructor()` method of the class. Our state is an object which in our case only has one key called `message`.

```javascript
class Hello extends React.Component {

    constructor(){
        super();
        this.state = {
            message: "my friend (from state)!"
        };
    }

    render() {
        return <h1>Hello {this.state.message}!</h1>;
    }
}
```

Before we set the state, we have to call `super()` in the constructor. This is because `this` is uninitialized before `super()` has been called.

Changing the state
To modify the state, simply call **this.setState()**, passing in the new state object as the argument. We’ll do this inside a method which we’ll call `updateMessage`.

```javascript
class Hello extends React.Component {

    constructor(){
        super();
        this.state = {
            message: "my friend (from state)!"
        };
        this.updateMessage = this.updateMessage.bind(this);
   }
    updateMessage() {
        this.setState({
            message: "my friend (from changed state)!"
        });
    }
    render() {
        return <h1>Hello {this.state.message}!</h1>;
    }
}
```

> Note: To make this work, we also had to bind the `this` keyword to the `updateMessage` method. Otherwise we couldn’t have accessed `this` in the method.

The next step is to create a button to click on, so that we can trigger the `updateMessage()` method.

So let’s add a button to the `render()` method:

```javascript
render() {
  return (
     <div>
       <h1>Hello {this.state.message}!</h1>
       <button onClick={this.updateMessage}>Click me!</button>
     </div>
  )
}
```

Here, we’re hooking an event listener onto the button, listening for the **onClick** event. When this is triggered, we call the **updateMessage** method.

Here’s the entire component:

```javascript
class Hello extends React.Component {

    constructor(){
        super();
        this.state = {
            message: "my friend (from state)!"
        };
        this.updateMessage = this.updateMessage.bind(this);
    }
    updateMessage() {
        this.setState({
            message: "my friend (from changed state)!"
        });
    }
    render() {
         return (
           <div>
             <h1>Hello {this.state.message}!</h1>
             <button onClick={this.updateMessage}>Click me!</button>
           </div>
        )
    }
}
```

The **updateMessage** method then calls **this.setState()** which changes the `this.state.message` value. And when we click the button, here’s how that will play out:

Congrats! You now have a very basic understanding of the most important concepts in React.