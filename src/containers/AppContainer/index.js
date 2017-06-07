import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import LinksContainer from '../LinksContainer'
import Counter from '../Counter'
import 'normalize.css'
import { connect } from 'react-redux'
import { OK } from '../../actions'

const OkContainer = (props) => {
  return (<div>
  <button onClick={()=>props.OK()}>Click</button>
</div>)}


const Yes = () => (<div>
  Good Job
  <button onClick={()=>console.log('hi')}>Click me</button>
</div>)
const App = () => (<div>
  <LinksContainer />
  <Switch>
    <Route path="/ok" component={connect(null,{ OK })(OkContainer)}/>
    <Route path="/yes" component={Yes}/>
    <Route path="/counter" component={Counter}/>
  </Switch>
</div>)

export default App
// <Route path="/counter" component={Counter}/>
