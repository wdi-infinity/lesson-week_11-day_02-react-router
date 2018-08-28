[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Talk Template

## Prerequisites

-   [react-components-and-props](https://git.generalassemb.ly/ga-wdi-boston/react-components-and-props)

## Objectives

By the end of this, developers should be able to:

-   Write objectives that focus on demonstrating knowledge.
-   Write learning objectives that begin with an [imperative
    verb](https://en.wikipedia.org/wiki/Imperative_mood).
-   Avoid objectives that start with "Use" or "Understand".
-   Rewrite objecives that begin with "Use" by inverting sentence structure.
-   End each objective with a period.
-   Write objectives on the whiteboard so they can be referenced during a talk.

## Preparation

1.  Fork and clone this repository.
 [FAQ](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
1.  Create a new branch, `training`, for your work.
1.  Checkout to the `training` branch.
1.  Install dependencies with `npm install`.

## State in React Components

At this point, we know that we can pass data into a React component by providing
props. This allows data to flow "downwards", from parent component to child
component. Where does this data originate from, though? What if we need to
frequently update that data?

So far, that data has just been an array or object in the global scope of
`App.js`. This is not ideal for dynamic data -- if the data changes, every
component needs to know that, so that it can decide whether it needs to
re-render anything that's changed. To achieve this, React components keep track
of data in an object called "state".

## State vs. Props

`state` and `props` have a lot in common:

-  Both are POJOs.
-  Changes to a component's props or state cause the component's `render`
   method to be called.
-  Neither should be modified directly. (e.g. no `this.props.foo = 'bar'`)
-  Both are optional. A React component doesn't need props or state to render
   markup to the DOM (it wouldn't be very useful with neither, though).

They are also different in a few key ways:

-  Props are passed into a component from its parent. State is determined
   _within_ a component.
-  Props are initalized by adding attributes in JSX, e.g. `<MyComponent coolProp="radical!" />`. State is declared in a component's `constructor` method.
-  Props can only be modified in the parent component. State is modified in
   the component itself, with a call to `this.setState`.


## Demo: A simple stateful component

Let's take a look at a very simple example of a React component that keeps
track of its own state. You can follow along and add comments in
 `src/StateDemo.js`.

To render this component, instead of the contents of `App.js`, I'll just switch
out the `import` in `src/index.js`. Don't worry too much about this, it's just
a way to have multiple React apps in one repo for demonstration purposes.

I'll walk you through what's happening line by line, and show you the result
in the browser. Then, let's see if we can avoid having to use `.bind` on all
our component methods.

## Code-Along: Add option to "Like" a movie

Now that we know how to update state in a component, let's modify our `Movie`
component to allow us to "like" a movie and keep track of our opinions.

To add this functionality, we'll need to do the following:

1. give our `Movie` component a constructor, so that we can initialize a `state`
   object. The component should store just one property in its state: a boolean
   called `liked`.
1. Create a function that toggles that `liked` property on the state object.
1. Render a "like" button.
1. Give some visual indication when a `Movie` is liked.

There are a few things we'll need to keep in mind:

- `this.setState` is asynchronous, so any `this.setState` calls where the new
  state depends on the old state need to use [a slightly different syntax](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous).
- Event listeners in React are attached with the syntax
  `onChange={this.funcName}`. Note that this is different from the `onchange`
  attribute built into HTML.
- Similarly, classes are added to elements in React with the syntax `className="foo"`, **NOT** the familiar `class="foo"`.

## Lab: Toggle Actors Display

For some practice with state, add another method to our `Movie` component that
toggles a `hideActors` boolean on the state object. Only display information
about actors when the `hideActors` boolean is true.

**HINT:** You can use ternaries or `if` statements in JSX to display different
markup depending on whether a variable or expression is truthy.

## Additional Resources

-   [React Docs - State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
-   [CSS Tricks - React State From the Ground Up](https://css-tricks.com/react-state-from-the-ground-up/)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
