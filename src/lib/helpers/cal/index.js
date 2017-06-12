import moment from 'moment'
import _      from 'lodash'

const getDatesArr = (date) => {
  const inputTime = moment(date)
  const weekdayForFirstDayOfTheMonth = moment(inputTime).weekday()
  let lastMonthArr = _.range(1, weekdayForFirstDayOfTheMonth + 1)
                        .reverse()
                        .map(num=>({date: moment(inputTime).clone().subtract(num,'days').format('YYYY-MM-DD')}))
  let thisMonthArr = _.range(1,inputTime.daysInMonth()+1)
                         .map((date,i)=>({date: inputTime.clone().add(i,'days').format('YYYY-MM-DD')}))
  let combineArr = weekdayForFirstDayOfTheMonth == 0
                          ? thisMonthArr
                          : lastMonthArr.concat(thisMonthArr)
  return combineArr.map(obj=>({
    date: obj.date,
    displayDate: obj.date.substring(8),
    dateOfTheWeek: moment(obj.date).weekday(),
    active: false
  }))
}

export default getDatesArr
