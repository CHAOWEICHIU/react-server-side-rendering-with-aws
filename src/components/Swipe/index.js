import React, { Component } from 'react'
import Hammer from 'react-hammerjs'
import styled from 'styled-components'
class Swipe extends Component {
  constructor(props){
    super(props)
    this.state = {
      handleTap: false,
      handleSwipe: false,
    }
    this.handleTap = this.handleTap.bind(this)
    this.handleSwipe = this.handleSwipe.bind(this)
  }
  handleTap(){
    console.log('handleTap');
    this.setState({
      handleTap: true,
      handleSwipe: false,
    })
  }
  handleSwipe(){
    console.log('handleSwipe');
    this.setState({
      handleTap: false,
      handleSwipe: true,
    })
  }
  render(){
    const { handleTap, handleSwipe } = this
    console.log(this.state);
    return (<div>
      <div>Tap: {this.state.handleTap.toString()}</div>
      <div>swipe: {this.state.handleSwipe.toString()}</div>
      <div></div>
      <Hammer onTap={handleTap} onSwipe={handleSwipe}><AreaForTouch>Tap Me</AreaForTouch></Hammer>
    </div>)

  }
}

export default Swipe

const AreaForTouch = styled.div`
  width: 100%;
  height: 50vh;
  background-color: green;
`
