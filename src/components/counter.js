import React from 'react'
import { connect } from 'react-redux'
import { UP, DOWN } from '../actions'

const Counter = (props) => {
  const { UP, DOWN } = props
  return (<div>
    <p>Counter:</p>
    <div>{props.counter}</div>
    <br />
    <button onClick={()=>UP()}>UP</button>
    <br />
    <button onClick={()=>DOWN()}>DOWNEEEE</button>
  </div>)
}

export default connect(({counter})=>({counter}),{UP,DOWN})(Counter)
