import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import switchIndex from '../../lib/helpers/switchIndex'
class Slider extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeIndex:0,
      imgUrls: [...this.props.imgs]
    }
    this.onClickUp = this.onClickUp.bind(this)
    this.onClickDown = this.onClickDown.bind(this)
  }
  onClickUp(){
    let activeIndex = switchIndex({
      total: this.state.imgUrls.length - 1,
      current: this.state.activeIndex,
      go:'up',
    })
    this.setState({activeIndex})
  }
  onClickDown(){
    let activeIndex = switchIndex({
      total: this.state.imgUrls.length - 1,
      current: this.state.activeIndex,
      go:'down',
    })
    this.setState({activeIndex})
  }
  render(){
    const { onClickDown, onClickUp } = this
    const { activeIndex, imgUrls } = this.state
    return (<div>
      <button onClick={()=>onClickUp()}>+</button>
      <button onClick={()=>onClickDown()}>-</button>
      <div>current:{activeIndex}</div>
      <div>
        {imgUrls.map((img,i)=>{
          return i === activeIndex
            ? (<ImgDisplayShow src={img} key={`${i}_img`}/>)
            : (<ImgDisplayHide src={img} key={`${i}_img`}/>)
        })}
      </div>

    </div>)
  }
}

export default Slider

function animation (props) {
  return keyframes`
    0% {
      {opacity: 0.3};
      {filter: grayscale(100%)};
    }
    100% {
      {opacity:1};
      {filter: grayscale(0)};
    }
  `
}
const ImgDisplayShow = styled.img`
  position:absolute;
  width: 100vw;
  z-index: 100;
  animation: ${props => animation} 1s linear forwards;
`
const ImgDisplayHide = styled.img`
  position:absolute;
  width: 100vw;
  opacity:0.1;
  z-index: -1;
`
