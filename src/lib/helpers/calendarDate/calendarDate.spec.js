import getDatesArr from './'
describe('getDatesArr with key of date only',()=>{
  it('getDatesArr({date:"2016-12"})', ()=>{
    expect(getDatesArr({date:'2016-12'}).length).toBe(35)
    expect(
      getDatesArr({date:'2016-12'}).filter(i=>i.date.substring(0,7)=='2016-11').length
    ).toBe(4)
    expect(
      getDatesArr({date:'2016-12'}).filter(i=>i.date.substring(0,7)=='2016-12').length
    ).toBe(31)
    expect(
      getDatesArr({date:'2016-12'}).filter(i=>i.date.substring(0,7)=='2017-01').length
    ).toBe(0)
  })
  it('getDatesArr({date:"2017-01"})', ()=>{
    expect(getDatesArr({date:'2017-01'}).length).toBe(35)
    expect(
      getDatesArr({date:'2017-01'}).filter(i=>i.date.substring(0,7)=='2017-01').length
    ).toBe(31)
    expect(
      getDatesArr({date:'2017-01'}).filter(i=>i.date.substring(0,7)=='2016-12').length
    ).toBe(0)
    expect(
      getDatesArr({date:'2017-01'}).filter(i=>i.date.substring(0,7)=='2017-02').length
    ).toBe(4)
  })
  it('getDatesArr({date:"2017-02"})', ()=>{
    expect(getDatesArr({date:'2017-02'}).length).toBe(35)
    expect(
      getDatesArr({date:'2017-02'}).filter(i=>i.date.substring(0,7)=='2017-01').length
    ).toBe(3)
    expect(
      getDatesArr({date:'2017-02'}).filter(i=>i.date.substring(0,7)=='2017-02').length
    ).toBe(28)
    expect(
      getDatesArr({date:'2017-02'}).filter(i=>i.date.substring(0,7)=='2017-03').length
    ).toBe(4)
  })
  it('getDatesArr({date:"2017-03"})', ()=>{
    expect(getDatesArr({date:'2017-03'}).length).toBe(35)
    expect(
      getDatesArr({date:'2017-03'}).filter(i=>i.date.substring(0,7)=='2017-02').length
    ).toBe(3)
    expect(
      getDatesArr({date:'2017-03'}).filter(i=>i.date.substring(0,7)=='2017-03').length
    ).toBe(31)
    expect(
      getDatesArr({date:'2017-03'}).filter(i=>i.date.substring(0,7)=='2017-04').length
    ).toBe(1)
  })
  it('getDatesArr({date:"2017-04"})', ()=>{
    expect(getDatesArr({date:'2017-04'}).length).toBe(42)
    expect(
      getDatesArr({date:'2017-04'}).filter(i=>i.date.substring(0,7)=='2017-03').length
    ).toBe(6)
    expect(
      getDatesArr({date:'2017-04'}).filter(i=>i.date.substring(0,7)=='2017-04').length
    ).toBe(30)
    expect(
      getDatesArr({date:'2017-04'}).filter(i=>i.date.substring(0,7)=='2017-05').length
    ).toBe(6)
  })
  it('getDatesArr({date:"2017-05"})', ()=>{
    expect(getDatesArr({date:'2017-05'}).length).toBe(35)
    expect(
      getDatesArr({date:'2017-05'}).filter(i=>i.date.substring(0,7)=='2017-04').length
    ).toBe(1)
    expect(
      getDatesArr({date:'2017-05'}).filter(i=>i.date.substring(0,7)=='2017-05').length
    ).toBe(31)
    expect(
      getDatesArr({date:'2017-05'}).filter(i=>i.date.substring(0,7)=='2017-06').length
    ).toBe(3)
  })
  it('getDatesArr({date:"2017-06"})', ()=>{
    expect(getDatesArr({date:'2017-06'}).length).toBe(35)
    expect(
      getDatesArr({date:'2017-06'}).filter(i=>i.date.substring(0,7)=='2017-05').length
    ).toBe(4)
    expect(
      getDatesArr({date:'2017-06'}).filter(i=>i.date.substring(0,7)=='2017-06').length
    ).toBe(30)
    expect(
      getDatesArr({date:'2017-06'}).filter(i=>i.date.substring(0,7)=='2017-07').length
    ).toBe(1)
  })
  it('getDatesArr({date:"2017-07"})', ()=>{
    expect(getDatesArr({date:'2017-07'}).length).toBe(42)
    expect(
      getDatesArr({date:'2017-07'}).filter(i=>i.date.substring(0,7)=='2017-06').length
    ).toBe(6)
    expect(
      getDatesArr({date:'2017-07'}).filter(i=>i.date.substring(0,7)=='2017-07').length
    ).toBe(31)
    expect(
      getDatesArr({date:'2017-07'}).filter(i=>i.date.substring(0,7)=='2017-08').length
    ).toBe(5)
  })
  it('getDatesArr({date:"2017-08"})', ()=>{
    expect(getDatesArr({date:'2017-08'}).length).toBe(35)
    expect(
      getDatesArr({date:'2017-08'}).filter(i=>i.date.substring(0,7)=='2017-07').length
    ).toBe(2)
    expect(
      getDatesArr({date:'2017-08'}).filter(i=>i.date.substring(0,7)=='2017-08').length
    ).toBe(31)
    expect(
      getDatesArr({date:'2017-08'}).filter(i=>i.date.substring(0,7)=='2017-09').length
    ).toBe(2)
  })
  it('getDatesArr({date:"2017-09"})', ()=>{
    expect(getDatesArr({date:'2017-09'}).length).toBe(35)
    expect(
      getDatesArr({date:'2017-09'}).filter(i=>i.date.substring(0,7)=='2017-08').length
    ).toBe(5)
    expect(
      getDatesArr({date:'2017-09'}).filter(i=>i.date.substring(0,7)=='2017-09').length
    ).toBe(30)
    expect(
      getDatesArr({date:'2017-09'}).filter(i=>i.date.substring(0,7)=='2017-10').length
    ).toBe(0)
  })
  it('getDatesArr({date:"2017-10"})', ()=>{
    expect(getDatesArr({date:'2017-10'}).length).toBe(35)
    expect(
      getDatesArr({date:'2017-10'}).filter(i=>i.date.substring(0,7)=='2017-09').length
    ).toBe(0)
    expect(
      getDatesArr({date:'2017-10'}).filter(i=>i.date.substring(0,7)=='2017-10').length
    ).toBe(31)
    expect(
      getDatesArr({date:'2017-10'}).filter(i=>i.date.substring(0,7)=='2017-11').length
    ).toBe(4)
  })
  it('getDatesArr({date:"2017-11"})', ()=>{
    expect(getDatesArr({date:'2017-11'}).length).toBe(35)
    expect(
      getDatesArr({date:'2017-11'}).filter(i=>i.date.substring(0,7)=='2017-10').length
    ).toBe(3)
    expect(
      getDatesArr({date:'2017-11'}).filter(i=>i.date.substring(0,7)=='2017-11').length
    ).toBe(30)
    expect(
      getDatesArr({date:'2017-11'}).filter(i=>i.date.substring(0,7)=='2017-12').length
    ).toBe(2)
  })
  it('getDatesArr({date:"2017-12"})', ()=>{
    expect(getDatesArr({date:'2017-12'}).length).toBe(42)
    expect(
      getDatesArr({date:'2017-12'}).filter(i=>i.date.substring(0,7)=='2017-11').length
    ).toBe(5)
    expect(
      getDatesArr({date:'2017-12'}).filter(i=>i.date.substring(0,7)=='2017-12').length
    ).toBe(31)
    expect(
      getDatesArr({date:'2017-12'}).filter(i=>i.date.substring(0,7)=='2018-01').length
    ).toBe(6)
  })
  it('getDatesArr({date:"2018-01"})', ()=>{
    expect(getDatesArr({date:'2018-01'}).length).toBe(35)
    expect(
      getDatesArr({date:'2018-01'}).filter(i=>i.date.substring(0,7)=='2017-12').length
    ).toBe(1)
    expect(
      getDatesArr({date:'2018-01'}).filter(i=>i.date.substring(0,7)=='2018-01').length
    ).toBe(31)
    expect(
      getDatesArr({date:'2018-01'}).filter(i=>i.date.substring(0,7)=='2018-02').length
    ).toBe(3)
  })
})
describe('getDatesArr with other keys', ()=>{
  it('pass', ()=>{
    expect(1).toBe(1)
  })
})
xit('getDatesArr("2017-04")', ()=>{
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
xit('getDatesArr("2017-05")', ()=>{
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
