'use strcit'

/* Server Set up */
import express from 'express'
import path from 'path'
const app = express()
    , PORT = 8888

app.use('/static',express.static(path.join(__dirname, '../static')))

app.listen(PORT,(err)=>{
  if(err) throw err
  console.log(`listening on port ${PORT}`)
})

/* React Server Side Rendering */
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const user = (state='', action) => {
  switch (action.type) {
    case 'NAME':
      return state
    default:
      return state
  }
}
const login = (state='', action) => {
  switch (action.type) {
    case 'NAME':
      return state
    default:
      return state
  }
}

const reducers = combineReducers({
  user,
  login,
})

const initState = {user:'wayne', login:true}
const store = createStore(reducers, initState)
const preloadedState = store.getState()
const App = () => (<div>Apppp</div>)

app.get('/', (req, res)=>{
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )
  res.send(renderFullPage({html, preloadedState}))
})

const renderFullPage = ({html,preloadedState}) => (`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
`)
