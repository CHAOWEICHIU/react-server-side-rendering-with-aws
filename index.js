import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import express from 'express'
const app = express()
    , PORT = 3000


app.get('/', function(req, res){
  const context = {}
  // const html = ReactDOMServer.renderToString(
  //   <StaticRouter
  //     location={req.url}
  //     context={context}
  //   >
  //     <App/>
  //   </StaticRouter>
  // )
  const html = `<div>okokokokok</div>`
  if(context.url){
    res.status(301).send({Location: context.url})
  } else {
    res
    .status(200)
    .send(`
      <!doctype html>
      <div id="app">${html}</div>
    `)

  }

}).listen(PORT,()=>console.log(`listening on port ${PORT}`))
