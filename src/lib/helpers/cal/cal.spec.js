import getDatesArr from './'

it('getDatesArr("2017-01")', ()=>{
  expect(getDatesArr('2017-01').length).toBe(31)
})

it('getDatesArr("2017-02")', ()=>{
  expect(
    getDatesArr('2017-02').length
  ).toBe(31)
})
it('getDatesArr("2017-03")', ()=>{
  expect(
    getDatesArr('2017-03').length
  ).toBe(34)
})
it('getDatesArr("2017-04")', ()=>{
  expect(
    getDatesArr('2017-04').length
  ).toBe(36)
})
it('getDatesArr("2017-04")', ()=>{
  let actives = ['2017-04-01']
  expect(
    getDatesArr('2017-04').filter(i=>i.active).length
  ).toBe(1)
})
