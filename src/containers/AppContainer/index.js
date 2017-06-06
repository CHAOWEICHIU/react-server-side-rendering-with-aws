import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import LinksContainer from '../LinksContainer'
import Counter from '../Counter'

const Ok = () => (<div>ok</div>)
const Yes = () => (<div>
  Good Job
  <button onClick={()=>console.log('hi')}>Click me</button>
</div>)
const App = () => (<div>
  <LinksContainer />
  <Switch>
    <Route path="/ok" component={Ok}/>
    <Route path="/yes" component={Yes}/>
    <Route path="/counter" component={Counter}/>
  </Switch>
</div>)

export default App
// <Route path="/counter" component={Counter}/>
