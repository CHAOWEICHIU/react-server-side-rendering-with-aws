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
    return (<SliderContainer>
      <SwitchGeerRight onClick={()=>onClickUp()}></SwitchGeerRight>
      <SwitchGeerLeft onClick={()=>onClickDown()}></SwitchGeerLeft>
      <div>
        {imgUrls.map((img,i)=>{
          return i === activeIndex
            ? (<ImgDisplayShow src={img} key={`${i}_img`}/>)
            : (<ImgDisplayHide src={img} key={`${i}_img`}/>)
        })}
        <CirIndexContainer>
          {imgUrls.map((dot,i)=>{
            return i === activeIndex
              ? (<ActiveCirIndex key={`${dot}_index_dot`} />)
              : (<CirIndex key={`${dot}_index_dot`} />)
          })}
        </CirIndexContainer>
      </div>

    </SliderContainer>)
  }
}

export default Slider

const CirIndexContainer = styled.div`
  position: absolute;
  pointer-event:none;
  display:flex;
  width: 100%;
  justify-content: center;
  bottom:0;
`


const CirIndex = styled.div`
  height: 3vh;
  width: 3vh;
  border-radius: 100%;
  opacity: 0.5;
  background-color: black;
  margin: 3vh;
`
const ActiveCirIndex = styled(CirIndex)`
  background-color: white;
  opacity: 1;
`

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow:hidden;
`

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

const SwitchGeer = styled.div`
  background-color: transparent;
  z-index: 200;
  height: 100%;
  width: 50%;
  top:0;
  position: absolute;

  &:hover{
    background-color:black;
    opacity: 0.1;
    cursor: pointer;
  }
`
const SwitchGeerLeft = styled(SwitchGeer)`
  left:0;
`
const SwitchGeerRight = styled(SwitchGeer)`
  right:0;
`
const ImgDisplayShow = styled.div`
  background-image: ${props=>`url(${props.src})`};
  height: 60vh;
  width:100%;
  background-repeat: no-repeat;
  background-position: center center;
  animation: ${props => animation} 1s linear forwards;
`
const ImgDisplayHide = styled.img`
  display:none;
`
