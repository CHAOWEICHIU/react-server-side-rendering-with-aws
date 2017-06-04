import React from 'react'
import { connect } from 'react-redux'
import { UP, DOWN } from '../../actions'
import styled from 'styled-components'

const TopContainer = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: center;
  width:100%;
  height: 500px;
`

const StyledCounterContainer = styled.div`
  width:50%;
  height: 100%;
  background: #1f1a25;
  display: flex;
  flex-direction:column;
  justify-content: space-around;
`

const StyledBtnContainer = styled.div`
  display: flex;
  justify-content: center;
`

const CounterTitle = styled.div`
  color:white;
  font-size:60px;
  display: flex;
  justify-content: center;
`
const CounterNumber = styled.div`
  color: white;
  font-size:40px;
  display: flex;
  justify-content: center;
`

export const StyledBtn = styled.button`
  outline-style: none;
  background:none;
  border:none;
  cursor:pointer;
  line-height: 1.5;
  font:700 1.2rem 'Roboto Slab', sans-serif;
  letter-spacing: 0.05rem;
  box-shadow: inset 0 0 0 4px #58afd1;
  color: #58afd1;
  width:150px;
  height: 50px;
  margin: 2px;
  &:hover {
    color: white;
    box-shadow: inset 0 0 0 4px white;
  }
`
const Counter = (props) => {
  const { UP, DOWN } = props
  return (
<TopContainer>
  <StyledCounterContainer>
    <CounterTitle>Counter</CounterTitle>
    <CounterNumber>{props.counter}</CounterNumber>
    <StyledBtnContainer>
      <StyledBtn onClick={()=>UP()}>Increase</StyledBtn>
      <StyledBtn onClick={()=>DOWN()}>Decrease</StyledBtn>
    </StyledBtnContainer>
  </StyledCounterContainer>
</TopContainer>
)}

export default connect(({counter})=>({counter}),{UP,DOWN})(Counter)
