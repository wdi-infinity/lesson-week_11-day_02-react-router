[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

 
## Prerequisites
- [react-components-and-props](https://git.generalassemb.ly/ga-wdi-pvd/react-components-and-props)
- [react-component-lifecycle](https://git.generalassemb.ly/ga-wdi-pvd/react-component-lifecycle)

## Learning Objectives
- Research the philosophy behind react-router
- Implement dynamic routing in a React interface
- Modify an existing React application to use react-router

### Front-end routing

Why a router on the front-end? Shouldn't this go on the back end?

Before the advent of the SPA, the job of serving pages was left to the server side of the equation (think Rails views). You would make a request and the server would handle populating and delivering a view to the client. 

Fast forward a number of years where browsers are more advanced, the internet is faster and users expect quick results. This round-trip to the server is costly and slow. Instead, we can load everything that the client needs ahead of time, and when new information is needed on the server, an asynchronous request can be made to the server for any new information.

But, users still expect that warm and fuzzy interface that we have grown to love, the URL address bar. We also want browser history, so we can go forward and backwards through our various requests. So beyond just clicking links to navigate a SPA, we want the URL to be updated, and the history should also be updated appropriately.

A front end router lets us handle navigation of a user interface and state changes more efficiently. Instead of having to rerender and entire page we can only chose to change what we need. We can also serve more information faster so instead of having to send entire pages from the server to the client we can send smaller bits of data (like JSON) and let the client side handle the job of rendering.

### Routing in React

So you have a single page application. And you want users to be able to use links and URLs to navigate your application. And you're working with React. How do you do this? Sure, you could roll your own solution, complete with a functioning browser history using HTML5 and push-state, but that would be reinventing the wheel. 

Luckily, there is an excellent library that handles all aspects of routing for React applications, called (you gussed it!) [react-router](https://reacttraining.com/react-router/)

## React Router

To get familiar with React-router, we are going to use their excellent guides.

Read [this article on the history and philosophy of react-router](https://reacttraining.com/react-router/web/guides/philosophy)

How is react-router different from other frameworks' use of routes? 

What is static routing? What is dynamic routing?

### Basic Components

Next, continue reading through the guides, and go through [Basic Components](https://reacttraining.com/react-router/web/guides/basic-components)

What are the three types of components in React Router?

What is a `<Route>` component? When would you use a `<Switch>` component?

What are the 3 ways to render a component with props within a `<Route>`? 

What is `<Link>`? What is `<NavLink>`?

### Getting Started using React Router

Beyond installing a new library from npm:
`npm install react-router-dom`

### Lab

Incorporate react-router into an existing React application. Make sure to have a global Nav bar with links to various "pages".

### Advanced Challenge! 

Read through the code and comments in this advanced example of [creating a modal gallery in React](https://reacttraining.com/react-router/web/example/modal-gallery) that brings together many different features of React Router. See if you can get it working, then change various parts to make it your own!

**tips**: 

- Usually when you write a complex feature, you should start small. Get small pieces of functionality working, then incorporate more and more of the working code until you get to the the completed solution
	- However, when starting with a completed feature, you may need to start with the completed working version. So in this case, starting small means starting with the working version, and making small changes or customizations. 
- When something breaks and you cannot figure it out, work backwards from a functioning version.
- When you encounter something you do not know, and that is not commented sufficiently to understand, take a short detour and research the feature. Then, return to the codebase and add your own comments and notes.
 
### More Advanced Challenge!

Make your image modal work with Axios, performing a `GET` request to retreive a list of images.

## Additional Resources
- [Routing React Apps - The Complete Guide](https://scotch.io/tutorials/routing-react-apps-the-complete-guide)
	- A LOT here. It starts with configuring the development environment, and touches on many aspects of a real application's routing needs. 

- [React Router Docs and Guides](https://reacttraining.com/react-router/)
