import React from 'react'
import styled from 'styled-components'
import { Field } from 'redux-form'

export const Centered = styled.div`
  width: 550px;
  height: 110px;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
export const Group = styled.div`
  width: 100%;
  height: 110px;
  overflow: hidden;
  position: relative;
`
export const InputField = styled(Field)`
  display: block;
  width: 100%;
  padding-top: 36.66667px;
  border: none;
  border-radius: 0;
  color: white;
  background: #333;
  font-size: 36.66667px;
  transition: .3s ease;

  &:valid {
    top: 0;
    font: 700 22px Roboto;
    color: rgba(255, 255, 255, 0.5);
  }
`

export const InputLabel = styled.label`
  position: absolute;
  top: 36.66667px;
  color: rgba(255, 255, 255, 0.5);
  font: 400 36.66667px Roboto;
  cursor: text;
  transition: .25s ease;


`

const NicedayInput = () => (
  <Centered>
    <Group>
      <InputField />
      <InputLabel />
    </Group>
  </Centered>

)

export default NicedayInput
