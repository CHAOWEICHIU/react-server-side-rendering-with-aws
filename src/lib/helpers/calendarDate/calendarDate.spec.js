import getDatesArr from './'

it('getDatesArr("2017-01")', ()=>{
  expect(getDatesArr('2017-01').length).toBe(32)
})

it('getDatesArr({date:"2017-02"})', ()=>{
  expect(
    getDatesArr({date:'2017-02'}).length
  ).toBe(31)
})
it('getDatesArr({date:"2017-03"})', ()=>{
  expect(
    getDatesArr({date:'2017-03'}).length
  ).toBe(34)
})
it('getDatesArr({date:"2017-04"})', ()=>{
  expect(
    getDatesArr({date:'2017-04'}).length
  ).toBe(36)
})
it('getDatesArr("2017-04")', ()=>{
  let input = getDatesArr({
    date:'2017-04',
    active: '2017-04-01',
    fullDays:['2017-04-05','2017-04-06'],
    almostFullDays: ['2017-05-07', '2017-04-03']
  })
  expect(
    input.filter(i=>i.active==true).length
  ).toBe(1)

  expect(
    input.filter(i=>i.state =='full').length
  ).toBe(2)

  expect(
    input.filter(i=>i.state =='almostFull').length
  ).toBe(1)
})
it('getDatesArr("2017-05")', ()=>{
  let input = getDatesArr({
    date:'2017-05',
    active: '2017-04-01',
    fullDays:['2017-04-05','2017-04-06'],
    almostFullDays: ['2017-05-07', '2017-04-03']
  })
  expect(
    input.filter(i=>i.active==true).length
  ).toBe(0)

  expect(
    input.filter(i=>i.state =='full').length
  ).toBe(0)

  expect(
    input.filter(i=>i.state =='almostFull').length
  ).toBe(1)
})
