import React            from 'react'
import { shallow }      from 'enzyme'
import renderer         from 'react-test-renderer'
import Loader           from './'
import 'jest-styled-components'

it('<Loader />', ()=>{
  const tree = renderer.create(
    <Loader />
  ).toJSON()
  expect(tree).toMatchStyledComponentsSnapshot()
})
