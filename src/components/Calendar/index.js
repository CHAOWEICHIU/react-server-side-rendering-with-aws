import React, { Component }         from 'react'
import styled                       from 'styled-components'
import _                            from 'lodash'
import moment                       from 'moment'

/* Helpers */
import getDatesArr from '../../lib/helpers/calendarDate'
const weekdaysArr = ['日', '一', '二', '三', '四', '五', '六']
const timeNow = moment()
const fullDays = ['2017-06-03', '2017-06-15']
const almostFullDays = ['2017-06-05', '2017-06-07']

class Calendar extends Component {
  constructor(props){
    super(props)
    this.state = {
      displayDate  : timeNow.format('YYYY-MM-DD'),
      activeDate   : '2017-06-06',
      displayDates : getDatesArr({
                      date:timeNow.format('YYYY-MM'),
                      active:'2017-06-06',
                      fullDays,
                      almostFullDays
                    })
    }

    this.upSwitch     = this.upSwitch.bind(this)
    this.downSwitch   = this.downSwitch.bind(this)
    this.onDateClick  = this.onDateClick.bind(this)
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

  onDateClick(date){
    this.setState({
      activeDate:date,
      displayDates:this.state.displayDates.map(obj=>{
        return obj.date == date
          ? Object.assign({}, {...obj}, {active: true})
          : Object.assign({}, {...obj}, {active: false})
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
    const {
      displayDate,
    } = this.state

    const {
      upSwitch,
      downSwitch,
      onDateClick,
    } = this

    return (
      <CalendarContainer {...this.props}>
        <Top>
          <SwitchBtn onClick={()=>upSwitch()}>{`<`}</SwitchBtn>
            <div>
              <div>year:{moment(displayDate).format('YYYY')}</div>
              <div>month:{moment(displayDate).format('MM')}</div>
            </div>
          <SwitchBtn onClick={()=>downSwitch()}>{`>`}</SwitchBtn>
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
              return (<AlmostFullDayText onClick={()=>onDateClick(date.date)} key={`${index}_date`}>almost:{date.displayDate}</AlmostFullDayText>)
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

const CalendarContainer = styled.div`
  background-color: #FFFFFF;
  border-radius:2%;
  width:${props=>`${props.viewWidth*100}vw`};
  display:flex;
  flex-direction: column;

  @media (max-width: 500px) {
    width: ${props=>`${props.viewWidthForMobile*100}vw`};
    margin-left: ${props=>`${(100-props.viewWidthForMobile*100)/2}vw`};
  }
`
const Top = styled.div`
  display:flex;
  justify-content: space-between;
`

//width: ${props=>`${props.viewWidth / 10/10}vmin`};
//height: ${props=>`${props.viewWidth / 10/10 -1.5}vmin`};
const SwitchBtn = styled.div`
  background-color:#DCDCDC;
  width: ${props=>`${props.viewWidth*100}vw`};
  border-radius: 100%;
  font-size: ${(props)=>`${props.maxWidth / 10/10/2}vmin`};
  padding-top: 1.5vmin;
  text-align:center;

  &:hover{
    background-color: black;
    cursor: pointer;
    color:white;
  }
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
