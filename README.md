# 27 Next Steps and Course Roadmap
# 26 Bonus: Building the Burger CSS
# 25 Bonus: A Brief Introduction to Redux Saga
# 24 Bonus: Animations in React Apps
# 23 Bonus: Next.js
# 22 Bonus: Working with Webpack
# 21 Deploying the App to the Web
# 20 Testing
# 19 Improving our Burger Project
# 18 Adding Authentication to our Burger Project
# 17 Redux Advanced: Burger Project
# 16 Redux Advanced
# 15 Adding Reduc to our Project
# 14 Redux
# 13 Forms and Form Validation
# 12 Adding Routing to our Burger Project

# 11 Multi-Page-Feeling in a Single-Page-App: Routing
## 210 Useful Resources & Links
## 209 Wrap up
## Assignment 3: Time to Practise - Routing
## 208 Routing and Server Deployment
## 207 Lazy Loading with React Suspense (16.6)
## 206 Loading Routes Lazily
## 205 Handling the 404 Case (Unknown Routes)
## 204 Working with Guards
## 203 Using the History Prop to Redirect (Replace)
## 202 Conditional Redirects
## 201 Redirecting Requests
## 200 Creating Dynamic Nested Routes
- use componentDidUpdate to rerender, when nested route is changed
```javascript
this.state.loadedPost.id !== +this.props.match.params.id
// or
this.state.loadedPost.id != this.props.match.params.id
```

## 199 Understanding Nested Routes
- 

## 198 Additional Information Regarding Active Links
- edge case with "/"

## 197 Navigating Programatically
- push to history 
```javascript
this.props.history.push({pathname: '/' + id})
// or
this.props.history.push('/' + id)
```

## 196 Using Switch to Load a Single Route
- defines that only the first match will be rendered
- order is important
- can be mixed


## 195 Parsing Query Parameters & the Fragment
```javascript
<Link to="/my-path?start=5">Go to Start</Link>
// or
<Link 
    to={{
        pathname: '/my-path',
        search: '?start=5'
    }}
    >Go to Start</Link>
// extract
componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
        console.log(param); // yields ['start', '5']
    }
}
// Fragment:
// You can pass it easily like this:

<Link to="/my-path#start-position">Go to Start</Link> 

// or

<Link
    to={{
        pathname: '/my-path',
        hash: 'start-position'
    }}
    >Go to Start</Link>
// React router makes it easy to extract the fragment. You can simply access props.location.hash .
```

## 194 Extracting Route Parameters
- this.props.match.params.id 

## 193 Passing Route Parameters
```javascript
// dynamic route
<Route path="/:id" exact component={FullPost}>

// wrap single post in posts with Link
<Link to={post.id} key={post.id}>
...
```

## 192 Styling the Active Route
- NavLink instead of Link
    - adds class="active"
- be aware of exact
```javascript
// change active class name / active style
<NavLink
    to="/"
    exact
    activeClassName="my-active"
    activeStyle={{
        color: '#fa923f',
        text-decoration: 'underline'
    }}
>
```

## 191 Absolute vs Relative Paths (Article)
- 
```javascript
You learned about <Link> , you learned about the to  property it uses.

The path you can use in to can be either absolute or relative. 

Absolute Paths
By default, if you just enter to="/some-path"  or to="some-path" , that's an absolute path. 

Absolute path means that it's always appended right after your domain. Therefore, both syntaxes (with and without leading slash) lead to example.com/some-path .

Relative Paths
Sometimes, you might want to create a relative path instead. This is especially useful, if your component is already loaded given a specific path (e.g. posts ) and you then want to append something to that existing path (so that you, for example, get /posts/new ).

If you're on a component loaded via /posts , to="new"  would lead to example.com/new , NOT example.com/posts/new . 

To change this behavior, you have to find out which path you're on and add the new fragment to that existing path. You can do that with the url  property of props.match :

<Link to={props.match.url + '/new'}>  will lead to example.com/posts/new  when placing this link in a component loaded on /posts . If you'd use the same <Link>  in a component loaded via /all-posts , the link would point to /all-posts/new .

There's no better or worse way of creating Link paths - choose the one you need. Sometimes, you want to ensure that you always load the same path, no matter on which path you already are => Use absolute paths in this scenario.

Use relative paths if you want to navigate relative to your existing path.
```

## 190 Absolute vs Relative Paths
```javascript
// absolute
pathname: '/new-posts'

// relative
pathname: this.props.match.url + '/new-posts'
```

## 189 The "withRouter" HOC & Route Props
- you can pass on props manually to child components 
```javascript
match={this.props.match}
```
- hoc withRouter
```javascript
export default withRouter(post);
```

## 188 Using Routing-Related Props
- React Router enriches the props object with 
    - history, 
    - location
        - hash: for example to jump to specific location
    - match

## 187 Using Links to Switch Pages
- with Link it wont reload again
```javascript
// add the Link component
<Link to="/">Home</Link>

// advanced setup
<Link to={{
    pathname: '/new-post',
    hash: '#submit',
    search: '?quick-submit=true'
}}">Home</Link>
```

## 186 Switching Between Pages
- reloading problem

## 185 Rendering Components for Routes
```javascript
// comment out jsx
{/*  */}
```

```javascript
<Route path="/posts" component={Posts} />
```

## 184 Setting Up and Rendering Routes

## 183 Preparing the Project For Routing
- Routeattributes
    - exact
    - path
    - render()
- Routes and Links are seperated

## 182 react-router vs react-router-dom
- We installed both react-router  and react-router-dom . Technically, only react-router-dom  is required for web development. It wraps react-router  and therefore uses it as a dependency. We don't need to install react-router  on our own for it to work. You can omit this installation step, I left it in there for historic reasons and because I like to emphasize that the main package is named react-router. If you ever search for assistance, you probably want to search for "react router" - that's the name of the package

## 181 Setting Up the Router Package
- react-router logic
- react-router-dom visualization

## 180 Setting Up Links
## 179 routing and spas
- beeing able to show different pages to the user
- navigating
- use a Router Package
    - Parses URL / Paths
    - Read Config
    - Render / Load appropriate JSX / Component

## 178 Module Intro
- Routing is not build into the core of react
- we use a package, which is not build by react but defacto standard

# 10 Burger Builder Project: Accessing a Server

## 177 Useful Resources & Links
## 176 Removing Old Interceptors
## 175 Retrieving Data from the Backend
## 174 Handling Errors
- withErrorHandler
```javascript
// starting with lower case, because we are not using it in jsx
import withErrorHandler from ('.')
export default withErrorHandler(BurgerBuilder)

// return anonymous class
return class extends Component {}
```

## 173 Displaying a Spinner while Sending a Request
- https://projects.lukehaas.me/css-loaders/

## 172 Sending a POST Request

## 171 create the axios instance

## 170 Creating the Firebase Project

## 169 Firebase & The Right Database
- choose the realtime database

## 168 create a backend with firebase

# 9 Reaching out to the Web (Http / Ajax)

## 167 Useful Resources & Links
- Axios Docs: https://github.com/axios/axios

## 166 Wrap Up
- axios
- defaults
- interceptors
- instances

## 165 Creating and Using Axios Instances
- you can do a half-measure by creating instances of axios
```javascript
// overwrites defaults, which are set
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});
```


## 164 Setting a Default Global Configuration for Axios
```javascript
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';
```

## 163 Removing Interceptors
```javascript
axios.interceptors.request.eject(...);
axios.interceptors.response.eject(...);
```

## 162 Adding Interceptors to Execute Code Globally
- interceptors are pratical for
    - logging
    - errors
    - setting headers
- axios is really nice!

## 161 Handling Errors locally

## 159 Deleting Data

## 158 Posting Data to the server

## 156 Making a post selectable

## 155 Transforming Data
- pagination?
- transform request

## 153 Creating an HTTPRequest
- lifecycle hook for sideeffects
- componentDidMount

## 152 Module Introduction
- https://jsonplaceholder.typicode.com/
- two options for fetching ajax requests
  - 1 XMLHttpRequest (native manually)
  - 2 axios package (not connected to react)

# 8  Real App: The Burger Builder (Basic Version)

## 151 Useful Resources & Links

## 150 Wrap Up
- Aux
- Backdrop
- Sidedrawer
- Lifecycle Hooks
- BUILDING PROJECTS IS THE BEST WAY TO LEARN ANYTHING

## 149 Changing the Folder Structure
- hoc: higher order, no state change
- containers: state change
- components: dump

## 148 Using Component Lifecycle Methods
- used in functions which trigger sideeffects (server)

## 147 Improving Performance

## 146 Prop Type Validation
- use prop-types when working in teams
- convert from functional to class based components for using it, dont overdo it

## 145 Improving the App
- usage of prop-types
- usage of lifecycle hooks

## 144 Adding Hamburger Icon

## 143 Adding a SideDrawer Toogle Button
- setState is async
```javascript
this.setState((prevState) => {
    return {showSideDrawer: !prevState.showSideDrawer}
})
```

## 142 Reusing the Backdrop
- simply adding attribute sets it to true
```html
<Backdrop show />
```

## 141 More about Responsive Adjustments

## 140 Working with responsive Adjustments
- adjust logo size in different places

## 139 Creating a responsive Sidedrawer

## 136 Adding reusable Navigation Items
- learn about Styling
- use css snippets

## 135 Using a Logo
- learn how webpack handles picture-imports

## 133 Adding the Price

## 132 Implementing the button component

## 131 Adding a custom Button Component

## 130 Implementing the Backdrop Component

## 129 Showing and Hiding the Modal with Animation

## 128 Creating the Order Summary Modal

## 127 Adding the Order Button
- insert a Modal
- checkout Button
- Summary

## 126 Displaying and Updating the Burger Price
```html
<strong>{props.price.toFixed(2)}
```

## 125 Removing Ingredients savely

## 124 Connecting State to Build Controls
- name global constants in capital letters
- onClick handler is from react

## 123 Outputting Multiple Build Controls

## 122 Adding the Build Control Component

## 121 Calculating the Ingredient Sum Dynamically
- make use of reduce https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
- make use of map https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

## 120 Outputting Burger Ingredients Dynamically
- transform object into array
- ```object.keys(props.ingredients)```
- ```Array()``` method for 
```javascript
const transformedIngredients =
    Object.keys(props.ingredients).map((igKey) => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        });
    });
```

## 119 Starting the Burger Component
- 1.2 scales based on the user selected size

## 118 Adding Prop Type Validation
- prop-types can only be used on class components

## 117 Adding a Dynamic Ingredient Component
- good practise to create granular components and not big chunks

## 116 Starting Implementation of The Burger Builder

## 115 Creating a Layout Component
- seperate component for layout
- use higher order compoent [Aux](code/src/hoc/Aux.js)
- added font Open Sans

## 114 Setting up the Project
- want to use css modules so we have to **eject** the project
- other fond Open Sans (bold 700)
- https://fonts.google.com/

## 113 Planning the State
![planning a react app](course/pics/113-1.png)

## 112 Planning our App - Layout and Component Tree
![planning a react app](course/pics/112-1.png)

## 111 Planning an App in React - Core Steps
![planning a react app](course/pics/111-1.png)
1. Component Tree / Component Structure
2. Application State (Data)
3. Components vs Containers
    - stateful vs functional

## 110 Module Introduction (8  Real App: The Burger Builder (Basic Version)
- time to build a real react application
- learn all concepts

# 7 Diving Deeper into Components & React Internals

## 109 Useful Resources & Links (7 Diving Deeper into Components & React Internals)
- State & Lifecycle: https://reactjs.org/docs/state-and-lifecycle.html
- PropTypes: https://reactjs.org/docs/typechecking-with-proptypes.html
- Higher Order Components: https://reactjs.org/docs/higher-order-components.html
- Refs: https://reactjs.org/docs/refs-and-the-dom.html

## 108 Wrap Up (7 Diving Deeper into Components & React Internals)
- a lot of theory
- its important to understand how it works
- hooks/lifecycles, ...

## 107 The "memo" Method (React 16.6)
- how to effectivly rerender your component
- PureComponent: only rerender when something changed
- now you can also optimize functional components
```javascript
export default React.memo(cockpit);
```
- now only when props really change, the component will be rerendered
- props will only be compared on a shallow level (no deep checking is done) but if toplevel value changed, than it is rerendered
- it does not always makes sense
    - if a component must be rerendered every time

## 106 Updated Lifecycle Hooks (React 16.3)
- discourage of use of some hooks
  - componentWillMount
  - componentWillUpdate
  - compoenntWillReceiveProps
- were used on a wrong way
- 2 new ones
    - ```static getDerivedStateFromProps(nextProps, prevState)```
        - do not overuse
    - ```getSnapshotBeforeUpdate()```
        - use for example to save current scrolling posistion (see official docs for example)
- you shouldnt couple your state to props

## 105 More on the Context API (React 16.6)
- new feature, easier usage
- 
```javascript
// App.js
toggleAuth = () => {
    this.setState(prevState => {
        return {
            isAuth: !prevState.isAuth
        }
    })
}

// Login.js
import AuthContext from '../auth-context'
class Login extends Component {
    static contextType = AuthContext;

    render() {
        (
            <button onClick={this.context.toggleAuth}>
                {this.context.isAuth = 'Logout' : 'Login'}
            </button>
        )
    }
}

// auth-context.js
export default React.createContext({
    isAuth: false,
    toggleAuth: () => {}
})
```


## 104 The Context API (React 16.3)
- a greate tool to pass global state around in your app
- works with providers or consumers
  - in app.js we provide
    - to all child components, no matter on which level they are
  - in others we consume
- we can use a component
```javascript

// Provide
export const AuthContext = React.createContext(false);
<AuthContext.Provider value={this.state.authenticated}>
    {persons}
</AuthContext.Provider>

// Consume
import { AuthContext } from '../../../containers/App'
<AuthContext.Consumer>
    {auth => auth ? <p>I'm authenticated</p> : null}
</AuthContext.Consumer>
```

## 103 More on the React ref API (16.3)

### new way of rendering references
```javascript
// in constructor
this.inputElement = React.createRef();

// usage in element
ref={this.inputElement}
```

### forward Refs
- a tunnel through the higher order components
- forward refs are only used for higher order components which want to tunnel
- usually one uses normal refs
```javascript
const withClass = (WrappedComponent, className) => {
    const WithClass = class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent
                        ref={this.props.forwardedRef}
                        {...this.props} />
                </div>
            )
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardedRef={ref} />;
    });
}
```


## 102 Using References (“ref”) → focusing
- References are only available in stateful components
- Don't get lazy and it use for other things
  - focus()
  - Media playback

## 101 Available PropTypes
- https://reactjs.org/docs/typechecking-with-proptypes.html

### types
```javascript
import PropTypes from 'prop-types';
 
MyComponent.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
 
  // Anything that can be rendered: numbers, strings, elements or an array
  // (or fragment) containing these types.
  optionalNode: PropTypes.node,
 
  // A React element.
  optionalElement: PropTypes.element,
 
  // You can also declare that a prop is an instance of a class. This uses
  // JS's instanceof operator.
  optionalMessage: PropTypes.instanceOf(Message),
 
  // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),
 
  // An object that could be one of many types
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),
 
  // An array of a certain type
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
 
  // An object with property values of a certain type
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),
 
  // An object taking on a particular shape
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),
 
  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  requiredFunc: PropTypes.func.isRequired,
 
  // A value of any data type
  requiredAny: PropTypes.any.isRequired,
 
  // You can also specify a custom validator. It should return an Error
  // object if the validation fails. Don't `console.warn` or throw, as this
  // won't work inside `oneOfType`.
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },
 
  // You can also supply a custom validator to `arrayOf` and `objectOf`.
  // It should return an Error object if the validation fails. The validator
  // will be called for each key in the array or object. The first two
  // arguments of the validator are the array or object itself, and the
  // current item's key.
  customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
};
```
### Requiring Single Child
- With PropTypes.element you can specify that only a single child can be passed to a component as children.
```javascript
import PropTypes from 'prop-types';
 
class MyComponent extends React.Component {
  render() {
    // This must be exactly one element or it will warn.
    const children = this.props.children;
    return (
      <div>
        {children}
      </div>
    );
  }
}
 
MyComponent.propTypes = {
  children: PropTypes.element.isRequired
};
```

### Default Prop Values
- You can define default values for your props by assigning to the special defaultProps property:
```javascript
class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}
 
// Specifies the default values for props:
Greeting.defaultProps = {
  name: 'Stranger'
};
 
// Renders "Hello, Stranger":
ReactDOM.render(
  <Greeting />,
  document.getElementById('example')
);
```
- The defaultProps will be used to ensure that this.props.name will have a value if it was not specified by the parent component. The propTypes typechecking happens after defaultProps are resolved, so typechecking will also apply to the defaultProps
