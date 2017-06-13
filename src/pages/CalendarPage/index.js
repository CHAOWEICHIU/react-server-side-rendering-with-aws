import React      from 'react'
import Calendar   from '../../components/Calendar'
import styled     from 'styled-components'

const CalendarPage = () => (
  <div>
    <CalendarPageContainer>
      <Calendar
        viewWidthRatioLg={35/100}
        viewWidthRatioMd={40/100}
        viewWidthRatioSm={50/100}
        viewWidthRatioXs={95/100}
        />
      <MessageContainer
        viewWidthRatioLg={30/100}
        viewWidthRatioMd={35/100}
        viewWidthRatioSm={40/100}
        viewWidthRatioXs={95/100}
        />
    </CalendarPageContainer>
    <br />
    <br />
  </div>
)

export default CalendarPage

const CalendarPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const MessageContainer = styled.div`
  background-color:gray;
  width: ${props=>`${props.viewWidthRatioLg*100}vw`};
  @media (max-width: 1200px) {
    width: ${props=>`${props.viewWidthRatioMd*100}vw`};
  }
  @media (max-width: 992px) {
    width: ${props=>`${props.viewWidthRatioSm*100}vw`};
  }
  @media (max-width: 768px) {
    width: ${props=>`${props.viewWidthRatioXs*100}vw`};
    margin-left: ${props=>`${(100-props.viewWidthRatioXs*100)/2}vw`};
  }
`
