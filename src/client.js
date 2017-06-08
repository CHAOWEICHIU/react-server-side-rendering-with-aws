'use strcit'

import React                                      from 'react'
import { render }                                 from 'react-dom'
import { createStore,applyMiddleware,compose }    from 'redux'
import { BrowserRouter }                          from 'react-router-dom'
import { Provider }                               from 'react-redux'
import createSagaMiddleware                       from 'redux-saga'
import Router                                     from './router'
import reducers                                   from './lib/reducers'
import sagas                                      from './lib/sagas'

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState    = window.__PRELOADED_STATE__
const composeEnhancers  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const clientToken       = window.sessionStorage.token || ''
// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__
delete window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const isProdctionMode = process.env.NODE_ENV == 'production' ? true : false
if(!isProdctionMode){ console.log('isProdctionMode:', isProdctionMode) }

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const store = (createStore(
    reducers,
    Object.assign({}, preloadedState,{token: clientToken}),
    composeEnhancers(applyMiddleware(sagaMiddleware))
))

sagaMiddleware.run(sagas)

render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>,
  document.getElementById('container')
)
