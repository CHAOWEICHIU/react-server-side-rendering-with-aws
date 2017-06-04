import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Counter from '../Counter'

const Ok = () => (<div>ok</div>)
const Yes = () => (<div>
  Good Job
  <button onClick={()=>console.log('hi')}>Click me</button>
</div>)
const App = () => (<div>
  <Link to="/ok">okkkk</Link>
  <br />
  <Link to="/yes">yessss</Link>
  <br />
  <Link to="/counter">counterrr</Link>
  <br />
  <Switch>
    <Route path="/ok" component={Ok}/>
    <Route path="/yes" component={Yes}/>
    <Route path="/counter" component={Counter}/>
  </Switch>
</div>)
export default App
