import React from 'react'
import Calendar from '../../components/Calendar'

const activeDays = [
  {date: '2017-05-01' , status: 'active'},
  {date: '2017-05-07' , status: 'full'},
  {date: '2017-05-17' , status: 'almost'}
]


const CalendarPage = () => (<div>
    <Calendar maxWidth={900} activeDays={activeDays}/>
  </div>)

export default CalendarPage
