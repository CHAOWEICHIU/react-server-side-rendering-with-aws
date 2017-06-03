import express from 'express'
const app = express()
    , PORT = 8888

app.get('/', (req,res)=>{
  res.status(200).send('Home Page')
})
app.listen(PORT,(err)=>{
  if(err) throw err
  console.log(`listening on port ${PORT}`)
})

import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import Appp from '../client'
import template from '../template'

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

const preloadState = {user:'wayne', login:true}
const store = createStore(reducers, preloadState)


app.get('/yo', function(req, res){
  const context = {}
  const html = template({body:renderToString(React.createElement(Provider,{store},React.createElement(Appp)))})
  if(context.url){
    res.status(301).send({Location: context.url})
  } else {
    res
    .status(200)
    .send(html)
  }
})
