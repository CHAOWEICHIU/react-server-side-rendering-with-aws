import React, { Component }         from 'react'
import styled                       from 'styled-components'
import _                            from 'lodash'
import moment                       from 'moment'
import getDatesArr                  from '../../lib/helpers/cal'


const weekdaysArr = ['日', '一', '二', '三', '四', '五', '六']
const CalendarContainer = styled.div`
  width:100%;
  background-color:gray;
`
const Top = styled.div`
  width:100%;
  background-color: green;
  display:flex;
`
const Bottom = styled.div`
  width: 100%;
  background-color:pink;
  display:flex;
  justify-content:flex-start;
  flex-direction:row;
  flex-wrap: wrap;
`

const DayText = styled.div`
  width: ${props=>`${(100/7)}%`};
  text-align:center;
  height:100px;
  border-radius:100%;
`
const ActiveDayText = styled(DayText)`
  color:white;
  background-color:#5BC0DE;
  &:hover{
    cursor:not-allowed;
  }
`
const AlmostFullDayText = styled(DayText)`
  color:#5BC0DE;
  background-color:white;
  &:hover{
    cursor:pointer;
    background-color:#5BC0DE;
    color:white;
  }
`
const FullDayText = styled(DayText)`
  color:#FFA0A0;
  background-color:green;
  &:hover{
    cursor:not-allowed;
  }
`
const NopeDayText = styled(DayText)`
  color:#696969;
  background-color:gray;
  &:hover{
    cursor: not-allowed;
  }
`

const timeNow = moment()
const fullDays = ['2017-06-03', '2017-06-15']
const almostFullDays = ['2017-06-05', '2017-06-07']

class Calendar extends Component {
  constructor(props){
    super(props)

    this.state = {
      displayDate           : timeNow.format('YYYY-MM-DD'),
      activeDate            : '2017-06-06',
      displayDates          : getDatesArr({
                                date:timeNow.format('YYYY-MM'),
                                active:'2017-06-06',
                                fullDays,
                                almostFullDays
                              })
    }
    console.log(this.state);
    this.upSwitch = this.upSwitch.bind(this)
  }
  upSwitch(){
    let futureMonth = moment(this.state.displayDate).clone().add(1,'months')
    this.setState({
      displayDate: futureMonth.format('YYYY-MM-DD'),
      displayDates: getDatesArr({
        date:futureMonth.format('YYYY-MM'),
        active: this.state.activeDate,
        fullDays,
        almostFullDays,
      })
    })
  }
  downSwitch(){
    let futureMonth = moment(this.state.displayDate).clone().subtract(1,'months')
    this.setState({
      displayDate: futureMonth.format('YYYY-MM-DD'),
      displayDates: getDatesArr({
        date:futureMonth.format('YYYY-MM'),
        active: this.state.activeDate,
        fullDays,
        almostFullDays,
      })
    })
  }
  render(){
    const { displayDate } = this.state
    return (
      <CalendarContainer>
        <Top>
          <button onClick={()=>this.upSwitch()}>up</button>
          <div>year:{moment(displayDate).format('YYYY')}</div>
          <div>month:{moment(displayDate).format('MM')}</div>
          <button onClick={()=>this.downSwitch()}>left</button>
        </Top>
        <Bottom>
          {weekdaysArr.map((weekday,index)=>{
            return (<DayText key={`${index}_weekday`}>{weekday}</DayText>)
          })}
        </Bottom>
        <Bottom>
          {this.state.displayDates.map((date,index)=>{
            if(date.active){
              return (<ActiveDayText key={`${index}_date`}>{date.displayDate}</ActiveDayText>)
            } else if (date.state == 'full'){
              return (<FullDayText key={`${index}_date`}>full:{date.displayDate}</FullDayText>)
            } else if (date.state == 'almostFull'){
              return (<AlmostFullDayText key={`${index}_date`}>almost:{date.displayDate}</AlmostFullDayText>)
            } else {
              return (<NopeDayText key={`${index}_date`}>{date.displayDate}</NopeDayText>)
            }


          })}
        </Bottom>



      </CalendarContainer>
    )
  }
}

export default Calendar
