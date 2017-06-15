import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import switchIndex from '../../lib/helpers/switchIndex'
class Slider extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeIndex:0,
      imgUrls: [...this.props.imgs],
      switchTo: null,
      init: true,
      go: null,
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
    this.setState({activeIndex, switchTo:'left', init:false, go:'down'})
  }
  onClickDown(){
    let activeIndex = switchIndex({
      total: this.state.imgUrls.length - 1,
      current: this.state.activeIndex,
      go:'down',
    })
    this.setState({activeIndex,switchTo:'right', init:false, go:'up'})
  }
  render(){
    const { onClickDown, onClickUp } = this
    const { activeIndex, imgUrls } = this.state
    return (<SliderContainer>
      <SwitchGeerRight onClick={()=>onClickUp()}></SwitchGeerRight>
      <SwitchGeerLeft onClick={()=>onClickDown()}></SwitchGeerLeft>
      <div>
        {imgUrls.map((img,i, all)=>{
          if(this.state.init){
            return i === activeIndex
              ? (<ImgDisplayShow switchTo={this.state.switchTo} src={img} key={`${i}_img_init`}/>)
              : (<ImgDisplayHide src={img} key={`${i}_img_init`}/>)
          } else {
            let activeIndexForHide = switchIndex({
              total: this.state.imgUrls.length - 1,
              current: this.state.activeIndex,
              go:this.state.go,
            })
            console.log('current:',this.state.activeIndex, 'next:',activeIndexForHide );
            return i === activeIndex
              ? ([<ImgDisplayShow switchTo={this.state.switchTo} src={img} key={`${i}_img`}/>, <ImgDisplayShowToHide switchTo={this.state.switchTo} src={all[activeIndexForHide]} key={`${i}_img_gone`}/>])
              : (<ImgDisplayHide src={img} key={`${i}_img`}/>)
          }

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

function animationFromRight (props) {
  return keyframes`
    0% {
      {opacity: 0.3};
      {filter: grayscale(100%)};
      {transform:translate(100vw)};
    }
    100% {
      {opacity:1};
      {filter: grayscale(0)};
      {transform:translate(0)};
    }
  `
}
function animationFromRightHide (props) {
  return keyframes`
    0% {
      {opacity: 0.3};
      {filter: grayscale(100%)};
      {transform:translate(0)};
    }
    100% {
      {opacity:1};
      {filter: grayscale(0)};
      {transform:translate(100vw)};
    }
  `
}
function animationFromLeft (props) {
  return keyframes`
    0% {
      {opacity: 0.3};
      {filter: grayscale(100%)};
      {transform:translate(100vw)};
    }
    100% {
      {opacity:1};
      {filter: grayscale(0)};
      {transform:translate(0)};
    }
  `
}
function animationFromLeftHide (props) {
  return keyframes`
    0% {
      {opacity: 0.3};
      {filter: grayscale(100%)};
      {transform:translate(0)};
    }
    100% {
      {opacity:1};
      {filter: grayscale(0)};
      {transform:translate(-100vw)};
    }
  `
}
function animationInit (props) {
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
const ImgDisplayShowToHide = styled.div`
  background-image: ${props=>`url(${props.src})`};
  position:absolute;
  top:0;
  height: 60vh;
  width:100%;
  background-repeat: no-repeat;
  background-position: center center;
  animation: ${props => {
    if(props.switchTo =='right'){
      return animationFromRightHide
    } else if ( props.switchTo == 'left'){
      return animationFromLeftHide
    } else {
      return animationInit
    }
  }} 1s ease-in-out forwards;
`
const ImgDisplayShow = styled.div`
  background-image: ${props=>`url(${props.src})`};
  top:0;
  height: 60vh;
  width:100%;
  background-repeat: no-repeat;
  background-position: center center;
  animation: ${props => {
    if(props.switchTo =='right'){
      return animationFromLeft
    } else if ( props.switchTo == 'left'){
      return animationFromRight
    } else {
      return animationInit
    }
  }} 1s ease-in-out forwards;
`
const ImgDisplayHide = styled.img`
  display:none;
`

const SwitchGeer = styled.div`
  background-color: transparent;
  z-index: 200;
  height: 100%;
  width: 50%;
  top:0;
  position: absolute;

  &:hover{
    background-color:gray;
    opacity: 0.05;
    cursor: pointer;
  }
`
const SwitchGeerLeft = styled(SwitchGeer)`
  left:0;
`
const SwitchGeerRight = styled(SwitchGeer)`
  right:0;
`
