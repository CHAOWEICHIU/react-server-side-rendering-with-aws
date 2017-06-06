'use strcit'

/* Server Set up */
import express from 'express'
import path from 'path'
import fs from 'fs'

const app = express()
    , isDevEnv = process.env.NODE_ENV == 'development'
    , isProdEnv = process.env.NODE_ENV == 'production'
    , PORT = isProdEnv ? 80 : 9999

const setCacheHeader = (req,res,next) => {
  res.setHeader('Cache-Control', 'public, max-age=31557600')
  res.status(200)
  next()
}

app.use('/static',setCacheHeader,express.static(path.join(__dirname, '../static')))

app.listen(PORT,(err)=>{
  if(err) throw err
  console.log(`listening on port ${PORT}`)
})

/* React Server Side Rendering */
import React                            from 'react'
import { renderToString }               from 'react-dom/server'
import { StaticRouter }                 from 'react-router'
import { createStore, combineReducers } from 'redux'
import { Provider }                     from 'react-redux'
import reducers                         from './reducers'
import AppContainer                     from './containers/AppContainer'
const initState = {user:'wayne', login:true}
const store = createStore(reducers, initState)
const preloadedState = store.getState()




app.get('*',(req, res)=>{
  const context = {}
  console.log('context:',context,'req.url', req.url);
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <AppContainer />
      </StaticRouter>
    </Provider>
  )
  res.status(200).send(renderFullPage({html, preloadedState}))
})


fs
.readdirSync(path.join(__dirname, '../', 'static','js'))

.map(filename=>`<script src="/static/js/${filename}"></script>`)

.join('')

const renderFullPage = ({html,preloadedState}) => (`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link href="data:image/x-icon;base64,AAABAAEAEBACAAAAAACwAAAAFgAAACgAAAAQAAAAIAAAAAEAAQAAAAAAQAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAPv/AAAAAAADwAAAD/AAABw4AAA73AAAN+wAAHfuAAB//gAAeZ4AAHmeAAA//AAAP/wAAB/4AAAP8AAAA8AAAAAAAAD8PwAA8A8AAOAHAADAAwAAgAEAAIABAAAAAAAAAAAAAAAAAAAAAAAAgAEAAIABAADAAwAA4AcAAPAPAAD8PwAA" rel="icon" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
        <title>Redux Universal Example</title>
        <style>
          .elementToFadeOut {
            -webkit-animation-name: fadeout; /* Safari 4.0 - 8.0 */
            -webkit-animation: fadeout 1.0s forwards; /* Safari 4.0 - 8.0 */
            animation-name: fadeout;
            animation: fadeout 1.0s forwards;
          }
          @keyframes fadeout {
            100% {background-color: #504356;}}
          }
        </style>
      </head>
      <body>
        <div id="container" style="background-color:#1F1A21;">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        ${fs
          .readdirSync(path.join(__dirname, '../', 'static','js'))
          .map(filename=>`<script src="/static/js/${filename}"></script>`)
          .reverse()
          .join('')}
        <script>
          var fn = function(){
            document.getElementById("container").className="elementToFadeOut"
          }
          document.addEventListener('DOMContentLoaded', fn, false);

        </script>
      </body>
    </html>
`)
