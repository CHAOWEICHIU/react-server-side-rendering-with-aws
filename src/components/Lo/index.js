import React, { Component } from 'react'
import Style from './style'

class Loader extends Component {
  constructor(props){
    super(props)
    this.state = {
      spokeNumber:10,
      spokeWidth:10,
      boxWidth:80,
      duration:2,
      delay:0.2
    }
  }
  render(){
    return (<Style boxSize={this.state.boxWidth}>
            {
              [...Array(this.state.spokeNumber)].map((item,i)=>{
                let degree = (i*360/this.state.spokeNumber)*(Math.PI/180)
                let radius = (this.state.boxWidth-this.state.spokeWidth)/2
                let spokeProps = {
                  width:this.state.spokeWidth+'px',
                  height:this.state.spokeWidth+'px',
                  top:(Math.sin(degree)*radius+radius)+'px',
                  left:(Math.cos(degree)*radius+radius)+'px',
                  animationDuration:(this.state.duration)+'s',
                  animationDelay:(this.state.delay*i)+'s'
                }
                return (<div key={i} className="spoke" style={spokeProps}/>)
              })
            }
            </Style>)
  }
}
export default Loader
