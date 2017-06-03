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
import reducers from './reducers'


const initState = {user:'wayne', login:true}
const store = createStore(reducers, initState)
const preloadedState = store.getState()

import App from './components/app'

app.get('/*', (req, res)=>{
  const context = {}
  console.log('context:',context,'req.url', req.url);
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
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
        <script src="/static/bundle.js"></script>


      </body>
    </html>
`)
