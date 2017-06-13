import switchIndex from './'

it.only('pass with up', ()=>{
  expect(
    switchIndex({
      total:    5,
      current:  1,
      go:     'up',
    })
  ).toBe(2)
  expect(
    switchIndex({
      total:    5,
      current:  5,
      go:     'up',
    })
  ).toBe(0)
})
it('pass with donw', ()=>{
  expect(
    switchIndex({
      total:    5,
      current:  0,
      go:     'up',
    })
  ).toBe(5)
  expect(
    switchIndex({
      total:    5,
      current:  5,
      go:     'down',
    })
  ).toBe(4)
})
it('pass with total is 1', ()=>{
  expect(
    switchIndex({
      total:    1,
      current:  0,
      go:     'up',
    })
  ).toBe(1)
  expect(
    switchIndex({
      total:    1,
      current:  1,
      go:     'up',
    })
  ).toBe(0)
  expect(
    switchIndex({
      total:    1,
      current:  1,
      go:     'down',
    })
  ).toBe(0)
  expect(
    switchIndex({
      total:    1,
      current:  0,
      go:     'down',
    })
  ).toBe(1)
})
it('pass with total is 1', ()=>{
  expect(
    switchIndex({
      total:    0,
      current:  0,
      go:     'up',
    })
  ).toBe(0)
  expect(
    switchIndex({
      total:    0,
      current:  0,
      go:     'down',
    })
  ).toBe(0)
})
