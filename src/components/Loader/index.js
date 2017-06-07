import React from 'react'
import styled, { keyframes } from 'styled-components'

function animation (props) {
  return keyframes`
    0% {
     transform: rotate(0deg);
    }
    100% {
       transform: rotate(360deg);
    }
  `
}

const Loader = styled.div`
  align-self: center;
  margin-top: 100px;
  border: 12px solid #055877;
  border-right-color: transparent;
  border-radius: 50%;
  display: inline-block;
  height: 100px;
  width: 100px;
  animation: ${props => animation} 1s ease-in-out infinite;
`

export default Loader
