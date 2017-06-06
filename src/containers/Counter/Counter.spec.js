import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { StyledBtn } from './'
import 'jest-styled-components'

it('<StyledBtn />', ()=>{
  const tree = renderer.create(
    <StyledBtn />
  ).toJSON()
  expect(tree).toMatchStyledComponentsSnapshot()
})
