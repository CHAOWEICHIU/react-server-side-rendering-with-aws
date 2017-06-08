'use strcit'

import React                          from 'react'
import { Link, Switch, Route }        from 'react-router-dom'
import { Redirect }                   from 'react-router'
import { connect }                    from 'react-redux'
import CounterPage                    from './pages/CounterPage'
import LoginPage                      from './pages/LoginPage'
import StyledLink                     from './components/Link'
import 'normalize.css'

const NoMatch =() => (<div>NoMatch</div>)
const HomePage = () => (<div>Home!</div>)
const LinksContainer = () => (<div>
  <StyledLink to="/counter">counter</StyledLink>
  <StyledLink to="/home">home</StyledLink>
  <StyledLink to="/unknown">unknown</StyledLink>
  <StyledLink to="/login">login</StyledLink>
</div>)

const RedirectWithStatus = (props) => {
  return (<Route render={({staticContext})=>{
      if(staticContext){
        global.staticContext.status = props.status
      }
      return (<Redirect from={props.from} to={props.to} />)
  }} />)
}
const isLogin = false
const Router = ({token}) => (<div>
  <LinksContainer />
  <Switch>
    <Route path="/home"     component={HomePage}    />
    <Route path="/login"    component={LoginPage}   />


    {/* Protected Resouces */}
    <Route path="/counter"  component={()=>{
      return isLogin
        ? (<CounterPage />)
        : (<RedirectWithStatus status={301} from="/counter" to="/login"/>)
    }} />

    {/* No Match */}
    <Route component={NoMatch}/>

  </Switch>
</div>)

export default Router
/*


<RedirectWithStatus
  status={301}
  from="/unknown"
  to="/ok"
/>
<Route path="/login" component={LoginContainer}/>
<Route exact path="/counter" component={()=>{
  return isLogin
    ? (<Counter />)
    : (<Redirect to="/login"/>)





*/
