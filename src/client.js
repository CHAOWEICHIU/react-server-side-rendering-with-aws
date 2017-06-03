'use strcit'

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './components/app'
import reducers from './reducers'

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
// const store = isDevMode
//                   ? (createStore(reducers, composeEnhancers()))
//                   : createStore(reducers)
const store = createStore(reducers, preloadedState, composeEnhancers())

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('container')
)
