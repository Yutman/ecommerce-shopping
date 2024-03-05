# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Classes
 Classes are used to create React components before the introduction of hooks in React 16.8. 
 A class component in React extends React.Component and typically includes a render method, which returns JSX to define the component's UI. 
 Class components can hold state and lifecycle methods (e.g., componentDidMount) to execute code at specific points in the component's lifecycle.

## Components
In React: Components are independent, reusable pieces of your UI. 
They can be defined using either functions or classes. 
Components take in parameters, called props, and return a hierarchy of views to display via the render method (for class components) or directly (for function components).

 ## Objects 
 In JavaScript, an object is an instance of a class
 Objects are key-value pairs where you can store and access data
 In React: Objects are used extensively, for example, as state in class components, or the argument to useState in functional components. 
 Props passed to components are also objects. 
 Additionally, the style attribute in JSX expects an object where CSS properties are defined in camelCase.

How to leverage the button type in order to show styling for three different kinds of buttons;
We can control the style by a class to have default, inverted, and google sign in
I created a variable 'BUTTON_TYPE_CLASSES'. Inside we know, for example, if we get past some value like button type, if the value is the string of google, then we want to render the class name 'Google sign-in'
It allows us to use a more readable and legible kind of input for button type, but render whatever it is internally that we need in order to properly display this button type. 

## Backticks
primarily used for defining template literals, which allow for multi-line strings and embedding expressions directly within strings.

