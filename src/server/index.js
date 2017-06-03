import express from 'express'
const app = express()
    , PORT = 9000

app.get('/', (req,res)=>{
  res.status(200).send('Home Page')
})
// import React from 'react'
// import { renderToString } from 'react-dom/server'
// import { StaticRouter } from 'react-router'

//
//
//
//
// const App = () => (<div>Food Job</div>)
//
// app.get('/', function(req, res){
//   const context = {}
//   const html = ReactDOMServer.renderToString(
//     React.createFactory(App)
//   )
//   // const html = `<div>okokokokok</div>`
//   if(context.url){
//     res.status(301).send({Location: context.url})
//   } else {
//     res
//     .status(200)
//     .send(`
//       <!doctype html>
//       <div id="app">${html}</div>
//     `)
//
//   }
//
app.listen(PORT,()=>console.log(`listening on port ${PORT}`))
