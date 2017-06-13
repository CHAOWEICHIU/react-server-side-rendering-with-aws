import React, { Component } from 'react'
import styled from 'styled-components'

class Slider extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeIndex:0
    }
  }
  render(){
    return (<div>
      <button>+</button>
      <button>-</button>
    </div>)
  }
}

export default Slider
