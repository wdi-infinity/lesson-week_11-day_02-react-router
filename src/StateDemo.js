import React, { Component } from 'react'

// we're going to have state, so we need to use the longer component syntax
class EditableHeader extends Component {
  // components with state need a `constructor` method to create a `state`
  // object and provide initial values for `state`. This method will get called
  // automatically the first time this component "mounts" (appears in the DOM)
  constructor () {
    // with ES6 classes, any class with a `constructor` must call a method
    // called `super`, which runs the parent class' `constructor`
    // so, in this case, calling `super()` calls `Component`s constructor
    super()

    // create a state POJO and attach it to `this`
    this.state = {
      // this is the default value of `this.state.text`
      // setting default values is a good practice because it's very easy to
      // leave something as `undefined` accidentally and then have that show
      // up in the DOM at some point
      text: 'Welcome to React!'
    }

    // What is this? What happens if we comment it out? Can we avoid this?
    // If we comment this out, `this` will be undefined inside the `handleChange`
    // method, so it won't be able to access `state`. This is one way to ensure
    // the `handleChange` method can access `this.state`.

    // We can avoid this by defining component methods with arrow functions
  }

  // the is a method on our `EditableHeader` header component
  // component methods can be attached to event listeners, or called from other
  // component methods
  // `event` here is the same as it would be in jQuery, mostly
  handleChange = event => this.setState({ text: event.target.value })
  // when the value of the `<input>` changes, we want to store thew new value
  // in `this.state.text`
  // `this.setState` accepts a POJO as an argument. The key is the property
  // of state that we want to change, the value is the new value of that
  // state property

  // whatever is returned from this method is what will show up in the DOM
  render () {
    // NOTE: We can't use comments in JSX

    // the `render` method must return one top level element, a `<div>` here

    // the `<h1>` will update every time we call `this.setState`

    // when the value of this input changes, `handleChange` will be called,
    // and an `event` object will be passed through
    return (
      <div>
        <h1>{this.state.text}</h1>
        <input onChange={this.handleChange} />
      </div>
    )
  }
}

// don't forget to export your components!
export default EditableHeader
