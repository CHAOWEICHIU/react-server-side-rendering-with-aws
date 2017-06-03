import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Counter from './counter'
const Ok = () => (<div>ok</div>)
const Yes = () => (<div>
  Good Job
  <button onClick={()=>console.log('hi')}>Click me</button>
</div>)
const App = () => (<div>
  <Link to="/ok">ok</Link>
  <Link to="/yes">yes</Link>
  <Link to="/counter">counter</Link>
  <Switch>
    <Route path="/ok" component={Ok}/>
    <Route path="/yes" component={Yes}/>
    <Route path="/counter" component={Counter}/>
  </Switch>
</div>)
export default App
