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
const regularDays = ['2017-06-18','2017-06-19', '2017-06-11']

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
                      almostFullDays,
                      regularDays,
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
        regularDays,
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
        regularDays,
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
          <TopSideBtn onClick={()=>downSwitch()}>{`<`}</TopSideBtn>
            <TopMiddle>
              <TopMiddleTitle>{moment(displayDate).format('YYYY')}</TopMiddleTitle>
              <TopMiddleTitle>{moment(displayDate).format('MMM')}</TopMiddleTitle>
            </TopMiddle>
          <TopSideBtn onClick={()=>upSwitch()}>{`>`}</TopSideBtn>
        </Top>
        <Middle>
          {weekdaysArr.map((weekday,index)=>{
            return (<MiddleText key={`${index}_weekday`}>{weekday}</MiddleText>)
          })}
        </Middle>
        <Bottom>
          {this.state.displayDates.map((date,index)=>{
            if(date.active){
              return (<ActiveCir {...this.props} key={`${index}_date`}>{date.displayDate}</ActiveCir>)
            } else if (date.state == 'full'){
              return (<FullCir {...this.props} key={`${index}_date`}>{date.displayDate}<br/><span>額滿囉</span></FullCir>)
            } else if (date.state == 'almostFull'){
              return (<AlmostFullCir {...this.props} onClick={()=>onDateClick(date.date)} key={`${index}_date`}>{date.displayDate}<br/><span>剩x位</span></AlmostFullCir>)
            } else if (date.state == 'regular') {
              return (<RegularCir {...this.props} onClick={()=>onDateClick(date.date)} key={`${index}_date`}>{date.displayDate}</RegularCir>)
            } else {
              return (<NopeCir {...this.props} key={`${index}_date`}>{date.displayDate}</NopeCir>)
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
  width: ${props=>`${props.viewWidthRatioLg*100}vw`};
  display:flex;
  flex-direction: column;
  flex-wrap:wrap;
  border-radius: 3%;
  padding: 20px;
  @media (max-width: 1200px) {
    width: ${props=>`${props.viewWidthRatioMd*100}vw`};
  }
  @media (max-width: 992px) {
    width: ${props=>`${props.viewWidthRatioSm*100}vw`};
  }
  @media (max-width: 768px) {
    width: ${props=>`${props.viewWidthRatioXs*100}vw`};
    margin-left: ${props=>`${(100-props.viewWidthRatioXs*100)/2}vw`};
    padding: 0;
  }
`
const Top = styled.div`
  display:flex;
  justify-content: space-around;
  height:50px;
`
const TopSideBtn = styled.div`
  padding-top:5px;
  font-size:35px;
  height: 35px;
  width: 50px;
  color:gray;
  border-radius: 100%;
  text-align:center;

  &:hover{
    cursor: pointer;
    color:#6AC7E1;
  }
`
const TopMiddle = styled.div`
  display:flex;
  justify-content: center;
`
const TopMiddleTitle = styled.div`
  margin: 5px 5px;
  font-size:25px;
  color: black;
`
const Middle = styled.div`
  width: 100%;
  margin: 10px 0;
  display:flex;
  justify-content:flex-start;
  flex-direction:row;
  flex-wrap: wrap;
  margin-bottom: 10px;
`
const MiddleText = styled.div`
  flex:1;
  text-align:center;
  color:#DCDCDC;
  font-size: 20px;
`
const Bottom = styled.div`
  width: 100%;
  display:flex;
  justify-content:flex-start;
  flex-direction:row;
  flex-wrap: wrap;
`
const BottomCir = styled.div`
  width: ${props=>`${props.viewWidthRatioLg*100/7}vw`};
  height: ${props=>`${props.viewWidthRatioLg*100/7/5*3}vw`};
  padding-top:${props=>`${props.viewWidthRatioLg*100/7/5*2}vw`};
  border-radius:100%;
  text-align:center;

  @media (max-width: 1200px) {
    width: ${props=>`${props.viewWidthRatioMd*100/7}vw`};
    height: ${props=>`${props.viewWidthRatioMd*100/7/5*3}vw`};
    padding-top: ${props=>`${props.viewWidthRatioMd*100/7/5*2}vw`};
  }
  @media (max-width: 992px) {
    width: ${props=>`${props.viewWidthRatioSm*100/7}vw`};
    height: ${props=>`${props.viewWidthRatioSm*100/7/5*3}vw`};
    padding-top: ${props=>`${props.viewWidthRatioSm*100/7/5*2}vw`};
  }
  @media (max-width: 768px) {
    width: ${props=>`${props.viewWidthRatioXs*100/7}vw`};
    height: ${props=>`${props.viewWidthRatioXs*100/7/5*3}vw`};
    padding-top: ${props=>`${props.viewWidthRatioXs*100/7/5*2}vw`};
  }
`
const ActiveCir = styled(BottomCir)`
  color:white;
  background-color:#5BC0DE;
  &:hover{
    cursor:not-allowed;
  }
`
const RegularCir = styled(BottomCir)`
  color:#696969;
  &:hover{
    background-color:#5BC0DE;
    color:white;
    cursor:pointer;
  }
`
const AlmostFullCir = styled(BottomCir)`
  color:#5BC0DE;
  background-color:white;
  &:hover{
    cursor:pointer;
    background-color:#5BC0DE;
    color:white;
  }
  > span {
    font-size: 12px;
  }
`
const FullCir = styled(BottomCir)`
  color:#FFA0A0;
  &:hover{
    cursor:not-allowed;
  }
  > span {
    font-size: 12px;
  }
`
const NopeCir = styled(BottomCir)`
  color:#DCDCDC;
  &:hover{
    cursor: not-allowed;
  }
`
