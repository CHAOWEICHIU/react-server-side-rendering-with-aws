import React from 'react'

class Greeting extends React.Component {
  render() {
    return (<h1>Hello World</h1>)
  }
}

export default Greeting


//
// // import App from './components/app'
// // import reducers from './reducers'
// // const isDevMode = process.env.NODE_ENV === 'development' ? true : false
//
// // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// // console.log('isDevMode:',isDevMode);
// // const store = isDevMode
//                   // ? (createStore(reducers, composeEnhancers()))
//                   // : createStore(reducers)
//
// const Apppp = ReactDOM.render(
//     <App />
//   ,
//   document.getElementById('container')
// )
//
// export default Apppp
