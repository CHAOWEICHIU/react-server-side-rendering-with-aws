import React                          from 'react'
import { Link, Switch, Route }        from 'react-router-dom'
import { Redirect }                   from 'react-router'
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
  </div>)
}

const NoMatch =() => (<div>NoMatch</div>)

const isLogin = false
const RedirectWithStatus = (props) => {
  return (<Route render={({staticContext})=>{
      if(staticContext){
        staticContext.status = props.status
      }
      return (<Redirect from={props.from} to={props.to} />)
  }} />)
}


const Yes = () => (<div>
  Good Job
  <button onClick={()=>console.log('hi')}>Click me</button>
</div>)
const App = () => (<div>
  <LinksContainer />
  <Switch>
    <RedirectWithStatus
      status={301}
      from="/unknown"
      to="/ok"
    />
    <Route path="/ok" component={connect(null,{ OK })(OkContainer)}/>
    <Route path="/yes" component={Yes}/>
    <Route path="/login" component={LoginContainer}/>
    <Route exact path="/counter" component={()=>{
      return isLogin
        ? (<Counter />)
        : (<Redirect to="/login"/>)
    }}/>


    <Route component={NoMatch}/>
  </Switch>
</div>)

export default App
