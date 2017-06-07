'use strcit'

import React                from 'react'
import { render }           from 'react-dom'
import { createStore,applyMiddleware,compose }      from 'redux'
import { BrowserRouter }    from 'react-router-dom'
import { Provider }         from 'react-redux'
import AppContainer         from './containers/AppContainer'
import reducers             from './reducers'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__
delete window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const isProdctionMode = process.env.NODE_ENV == 'production' ? true : false




// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = isProdctionMode
                  ? (createStore(
                      reducers,
                      preloadedState,
                      composeEnhancers(applyMiddleware(sagaMiddleware))
                    ))
                  : (createStore(
                      reducers,
                      preloadedState,
                      composeEnhancers(applyMiddleware(sagaMiddleware))
                    ))

sagaMiddleware.run(sagas)

if(!isProdctionMode){
  // console.log('isProdctionMode:', isProdctionMode);
}

render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>,
  document.getElementById('container')
)
