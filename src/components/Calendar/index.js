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
`

const timeNow = moment()

class Calendar extends Component {
  constructor(props){
    super(props)

    this.state = {
      displayDate           : timeNow.format('YYYY-MM-DD'),
      activeDate            : '2017-06-06',
      displayDates          : getDatesArr(timeNow.format('YYYY-MM'))
    }
    console.log(this.state);
    this.upSwitch = this.upSwitch.bind(this)
  }
  upSwitch(){
    let futureMonth = moment(this.state.displayDate).clone().add(1,'months')
    this.setState({
      displayDate: futureMonth.format('YYYY-MM-DD'),
      displayDates: getDatesArr(futureMonth.format('YYYY-MM'))
    })
  }
  downSwitch(){
    let futureMonth = moment(this.state.displayDate).clone().subtract(1,'months')
    this.setState({
      displayDate: futureMonth.format('YYYY-MM-DD'),
      displayDates: getDatesArr(futureMonth.format('YYYY-MM'))
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
            return (<DayText key={`${index}_date`}>{date.displayDate}</DayText>)
          })}
        </Bottom>



      </CalendarContainer>
    )
  }
}

export default Calendar
