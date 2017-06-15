import React from 'react'
import styled, { keyframes } from 'styled-components'


const Slide = (props) => (
  <SlideContainer {...props}>
    <SlideImg src={props.url}/>
    <SlideBackground {...props}/>
  </SlideContainer>
)

export default Slide
const MoveToLeft = keyframes`
  0% {
    transform:translate(0vw);
  }
  100% {
    transform:translate(-100vw);
  }
`;
const MoveFromLeft = keyframes`
  0% {
    transform:translate(0vw);
  }
  100% {
    transform:translate(-100vw);
  }
`;
const MoveFromRight = keyframes`
  0% {
    transform:translate(-200vw);
  }
  100% {
    transform:translate(-100vw);
  }
`;
const MoveToRight = keyframes`
  0% {
    transform:translate(0);
  }
  100% {
    transform:translate(100vw);
  }

`;

const Init = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const SlideContainer = styled.div`
  width:200vw;
  height:100%;
  display:flex;
  transform: ${props=>(props.init && 'translate(-50vw)')};
  flex-direction: ${props=>{
    return props.moveTo == 'right'
      ? 'row-reverse'
      : 'row'
  }};
  justify-content: center;
  animation: ${props=>{
    if(props.nextSlide){
      switch (props.moveFrom) {
        case 'left':
          return MoveFromLeft
        case 'right':
          return MoveFromRight
        default:
          return Init
      }
    } else {
      switch (props.moveTo) {
        case 'left':
          return MoveToLeft
        case 'right':
          return MoveToRight
        default:
          return Init
      }
    }

  }} 1s ease-in-out forwards;
`

const SlideBackground = styled.div`
  background-image: ${props=>(`url(${props.url})`)};
  position:absolute;
  height:100%;
  width:100vw;
  filter: brightness(0.5) grayscale(10%) blur(6px);
  background-position:center center;
  background-size:cover;
  background-repeat: no-repeat;
`
const SlideImg = styled.img`
  position:absolute;
  height: 100%;
  z-index:10000;
`
