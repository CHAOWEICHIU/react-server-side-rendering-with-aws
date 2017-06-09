import moment from 'moment'
import _      from 'lodash'


const getDaysArrayByYearAndMonth = ({year, month}) => {
  return _.range(1,moment(`${year}-${month}`).daysInMonth()+1)
}

it('getDaysArrayByYearAndMonth()', ()=>{
  expect(
    getDaysArrayByYearAndMonth({ year:'2017', month:'01' })
  ).toEqual(
    _.range(1,32)
  )
})
