import React        from 'react'
import styled       from 'styled-components'
import _ from 'lodash'

const weekdaysArr = ['日', '一', '二', '三', '四', '五', '六']
let r =
    _.range(27,31)
     .concat(_.range(1,31))
     .map((day,index)=>{
       if(index <= 4){
         return ({day, state: 'unavailable'})
       } else if (index == 5) {
         return ({day, state: 'today'})
       } else if (index <= 25){
         return ({day, state: 'only'})
       } else {
         return ({day, state: 'full'})
       }
     })



const CalendarContainer = styled.div`
  background-color: #FFFFFF;
  border-radius:2%;
  width: ${(props)=>`${props.maxWidth / 10}vmin`};
  display:flex;
  flex-direction: column;

  @media (max-width: 500px) {
    width: 100vw;
  }
`
const TopArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3vmin;
`

const LeftBtn = styled.div`
  background-color:#DCDCDC;
  width: ${(props)=>`${props.maxWidth / 10/10}vmin`};
  height: ${(props)=>`${props.maxWidth / 10/10 -1.5}vmin`};
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
const MiddleDisplay = styled.div`
  background-color:white;
  color:#6B7897;
  font-size: 3vmin;
`
const RightBtn = styled.div`
  background-color:#DCDCDC;
  width: ${(props)=>`${props.maxWidth / 10/10}vmin`};
  height: ${(props)=>`${props.maxWidth / 10/10 -1.5}vmin`};
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

const MiddleArea = styled.div`
  display: flex;
`


const Cir = styled.div`
  background-color: gray;
  width: ${(props)=>`${props.maxWidth / 10 / 7 - 2 }vmin`};
  height: ${(props)=>`${props.maxWidth / 10 / 7 - 5 }vmin`};
  border-radius: 100%;
  font-size: ${(props)=>`${props.maxWidth / 10 / 7 / 2 - 3 }vmin`};
  padding-top: 3vmin;
  text-align:center;
  margin: 1vmin;

  @media (max-width: 500px) {
    width: ${()=>`${100/7}vw`};
    height: ${()=>`${100/7 -3}vw`};
    font-size: ${()=>`${100/7/2}vw`};
    padding-top: ${()=>`3vmin`};
    margin:0;
  }
`

const BottomArea = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap:wrap;
`

const WeekdayDisplayCir = styled(Cir)`
  color:#666666;
  background-color:white;
`

const BeforeTodayCir = styled(Cir)`
  color:#696969;
  background-color:white;
  font-size: 2vw;
  &:hover{
    cursor: not-allowed;
  }
`
const TodayCir = styled(Cir)`
  color:white;
  background-color:#5BC0DE;
  font-size: 2vw;
  &:hover{
    cursor:not-allowed;
  }
`
const OnlyCir = styled(Cir)`
  color:#5BC0DE;
  background-color:white;
  font-size: 2vw;
  &:hover{
    cursor:pointer;
    background-color:#5BC0DE;
    color:white;
  }
`

const FullCir = styled(Cir)`
  color:#FFA0A0;
  background-color:white;
  font-size: 2vw;
  &:hover{
    cursor:not-allowed;
  }
`

const FullText = styled.div`
  color:#FFA0A0;
  font-size: 1.3vw;
`
const OnlyText = styled.div`
  color:#5BC0DE;
  font-size: 1.3vw;
`


const Calendar = (props) => (
  <CalendarContainer {...props}>
    <TopArea>
      <LeftBtn {...props}>{`<`}</LeftBtn>
      <MiddleDisplay >May<br/>2017</MiddleDisplay>
      <RightBtn {...props}>{`>`}</RightBtn>
    </TopArea>
    <MiddleArea>
      {weekdaysArr.map((cir, index)=><WeekdayDisplayCir key={`${index}_cir`} {...props}>{cir}</WeekdayDisplayCir>)}
    </MiddleArea>
    <BottomArea>
      {r.map((e,i)=>{
        if(e.state == 'unavailable'){
          return (<BeforeTodayCir key={e.state+e.day} {...props}>{e.day}</BeforeTodayCir>)
        } else if (e.state == 'today'){
          return (<TodayCir key={e.state+e.day} {...props}>{e.day}</TodayCir>)
        } else if(e.state == 'only'){
          return (<OnlyCir key={e.state+e.day} {...props}>{e.day}<OnlyText>快滿囉</OnlyText></OnlyCir>)
        } else if (e.state == 'full'){
          return (<FullCir key={e.state+e.day} {...props}>{e.day}<br/><FullText>額滿囉</FullText></FullCir>)
        }
      })}
    </BottomArea>

  </CalendarContainer>
)

export default Calendar
