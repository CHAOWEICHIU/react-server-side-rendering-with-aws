import React from 'react'
import Calendar from '../../components/Calendar'
import styled from 'styled-components'

const MessageContainer = styled.div`
  width: ${(props)=>`${props.viewWidth*100}vw`};
  background-color:gray;
  height: 500px;

  @media (max-width: 500px) {
    width: ${props=>`${props.viewWidthForMobile*100}vw`};
    margin-left: ${props=>`${(100-props.viewWidthForMobile*100)/2}vw`};
  }
`
const CalendarPageContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align:center;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`

const CalendarPage = () => (
  <CalendarPageContainer>
    <Calendar         viewWidth={70/100} viewWidthForMobile={95/100}/>
    <MessageContainer viewWidth={30/100} viewWidthForMobile={95/100}/>
  </CalendarPageContainer>
)

export default CalendarPage
