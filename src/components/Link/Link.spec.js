'use strcit'

import React            from 'react'
import { shallow }      from 'enzyme'
import renderer         from 'react-test-renderer'
import StyledLink       from './'
import { MemoryRouter } from 'react-router-dom'
import 'jest-styled-components'

it('<StyledLink />', ()=>{
  const tree = renderer.create(
    <MemoryRouter >
      <StyledLink to="good">Good</StyledLink>
    </MemoryRouter>
  ).toJSON()
  expect(tree).toMatchStyledComponentsSnapshot()
})
