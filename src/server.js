'use strcit'

/* Server Set up */
import express from 'express'
import path from 'path'
const app = express()
    , PORT = 8888

console.log(path.join(__dirname, '../static'))
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

import App from './components/app'

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
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="container">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script type="javascript" src="/static/bundle.js"></script>
      </body>
    </html>
`)
