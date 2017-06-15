import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import switchIndex from '../../lib/helpers/switchIndex'
import Slide from '../Slide'
class Slider extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeIndex:0,
      imgUrls: [...this.props.imgs],
      switchTo: null,
      init: true,
      slideMoveTo:null,
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
    this.setState({
      activeIndex,
      slideMoveTo:'left',
      init:false,
      go:'down'
    })
  }
  onClickDown(){
    let activeIndex = switchIndex({
      total: this.state.imgUrls.length - 1,
      current: this.state.activeIndex,
      go:'down',
    })
    this.setState({
      activeIndex,
      slideMoveTo:'right',
      init:false,
      go:'up'
    })
  }
  render(){
    const { onClickDown, onClickUp } = this
    const { activeIndex, imgUrls } = this.state
    return (<SliderContainer>
      <SwitchGeerRight onClick={()=>onClickUp()}></SwitchGeerRight>
      <SwitchGeerLeft onClick={()=>onClickDown()}></SwitchGeerLeft>
      <ImgContainer>
        {this.state.imgUrls.map((url,i, all)=>{
          if(this.state.init){
            return i == activeIndex
              ? (<Slide init={true} key={`${i}_slide`} url={url}/>)
              : (<span key={`${i}_slide_hide` }/>)
          } else {
            let activeIndexForCurrent = switchIndex({
              total: all.length - 1,
              current: i,
              go:this.state.go,
            })
            return i === activeIndex
              ? (
                  [
                    <Slide                  moveTo={this.state.slideMoveTo}  url={all[activeIndexForCurrent]} key={`${i}_img_current`}  />,
                    <Slide nextSlide={true} moveFrom={this.state.slideMoveTo} url={url} key={`${i}_img_next`}                            />,
                  ]
                )
              : (<span key={`${i}_slide_hide` }/>)
          }
        })}

        </ImgContainer>

      <CirIndexContainer>
        {imgUrls.map((dot,i)=>{
          return i === activeIndex
            ? (<ActiveCirIndex key={`${dot}_index_dot`} />)
            : (<CirIndex key={`${dot}_index_dot`} />)
        })}
      </CirIndexContainer>
    </SliderContainer>)
  }
}

export default Slider


const ImgContainer = styled.div`
  position: relative;
  display:flex;
  width:200vw;
  height: 50vh;
`

const SliderContainer = styled.div`
  position: relative;
  display:flex;
  overflow:hidden;
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
    opacity: 0.5;
    cursor: pointer;
  }
`
const SwitchGeerLeft = styled(SwitchGeer)`
  left:0;
`
const SwitchGeerRight = styled(SwitchGeer)`
  right:0;
`
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
