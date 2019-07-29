# DOM Manipulation Intro

### What is the DOM?
The DOM is essentially your HTML. You have elements on the page (such as the p tag) that consist of text, other elements, etc.

Example of DOM:
```
<div id="main">
  <p>This is a paragraph of the div with an id of main</p>
</div>
```

In this example, we have a parent element `<div></div>` that has a child element `p`. These elements when selected by JavaScript are also known as `nodes`.

### How does javascript interact with the DOM?
When we look at a static HTML page, that does nothing, we can then think, how can make this interactive? If we press this button, how can we make it do things? etc...

We do this usually through what we call event listeners. There are many types of event listeners we can use:
```
click - when you click on an element, fires a callback function (attach to specific element you would want to click)

keydown - fires a callback when you press a key on your keyboard, will fire off an event if specific element is attached (you can attach to document if you want to click anywhere on the page)

submit - fires a callback when you press the submit of a form

load - attach to window, fires a callback as soon as the window loads. Use this if you want anything to execute right after your html loads. Or to attach any event listeners that should be attached automatically.
```

and many more events. For a bigger list click [here](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener). Look at the sidebar to the left for the list of events you can use.

### Different ways to select nodes
There are many ways to select nodes in javascript. Here are a few easy ways to grab them.

`element.querySelector(selector)`
```
// grab element
document.querySelector('p') // grabs a p node

// grab element by id
document.querySelector('div#header-div') // grabs a div with the id of header-div

// grab element by class
document.querySelector('div.input-field') // grabs "first" node that matches the div with the class of input-field
```

`element.querySelectorAll(selector)`
```
document.querySelectorAll('div a') // grabs all the anchor links that has a parent div, returns a node list (array of nodes)
```

`element.getElementById(id)`
```
document.getElementById('username') // will grab any node with the id of username
```

`element.getElementsByClass(class)`
```
document.getElementsByClass('link') // will grab all the elements in a node list that has the class of link
```

### What to do with a node once you have it selected?
It highly depends on the node you have selected. Here are a few examples of scenarios that you may run into:

**Grabbing input values:**
```
function submitForm(e){
  e.preventDefault(); // keeps page from refreshing
  let username = document.getElementById('username').value // first you grab the input node, then you get the value with .value.
  let user = new User(username);
}
```

**Changing html inside a node** (for example a header div). You may start out with a div that looks like:
```
<div id="header">
  <h3>Some genious written header!</h3>
</div>
```
However you want to convert the div's html to display an h4 with the text of Some genious written header, but a little bit smaller! To do that we would first grab the div with the id of header and change it's `innerHTML`.

```
let header = document.querySelector('#header');
header.innerHTML = '<h4>Some genious written header, but a little bit smaller!</h4>';
```

As soon as the innerHTML is set to a new line, it will completely override what was there previously. If you wanted to add to the innerHTML that's already there, you would use `+=` instead.

### What to think about when you are manipulating the DOM
My advice, when you are working on building a javascript feature. Start from the beginning:
- What makes this happen? (event listener)
- When this starts happening, what will i need? (nodes, etc... inside the event listener)
- What needs to change or what do I do with these nodes that i have grabbed?
- How can i make the html reflect this state?# intro-to-dom-manipulation-sg-nancy
