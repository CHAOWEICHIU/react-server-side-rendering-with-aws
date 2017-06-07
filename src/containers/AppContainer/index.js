import React                          from 'react'
import { Link, Switch, Route }        from 'react-router-dom'
import { connect }                    from 'react-redux'
import 'normalize.css'

import { OK }                         from '../../actions'

import LinksContainer                 from '../LinksContainer'
// import RegistorContainer             from '../RegistorContainer'
import LoginContainer                 from '../LoginContainer'
import Counter                        from '../Counter'

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
    <Route path="/login" component={LoginContainer}/>

    <Route path="/counter" component={Counter}/>
  </Switch>
</div>)

export default App
// <Route path="/counter" component={Counter}/>

//
// <Route path="/registor" component={RegistorContainer}/>
