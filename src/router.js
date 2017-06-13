'use strcit'

import React                          from 'react'
import { Link, Switch, Route }        from 'react-router-dom'
import { Redirect }                   from 'react-router'
import { connect }                    from 'react-redux'
import CounterPage                    from './pages/CounterPage'
import LoginPage                      from './pages/LoginPage'
import PurchasePage                   from './pages/PurchasePage'
import CalendarPage                   from './pages/CalendarPage'
import SlidePage                      from './pages/SlidePage'
import StyledLink                     from './components/Link'


import 'normalize.css'

const NoMatch =() => (<div>NoMatch</div>)
const LinksContainer = () => (<div>
  <StyledLink to="/counter">CT</StyledLink>
  <StyledLink to="/unknown">UN</StyledLink>
  <StyledLink to="/login">LG</StyledLink>
  <StyledLink to="/calendar">CA</StyledLink>
  <StyledLink to="/slide">SL</StyledLink>
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
    <Route path="/login"          component={LoginPage}             />
    <Route path="/calendar"       component={CalendarPage}          />
    <Route path="/slide"          component={SlidePage}             />


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
