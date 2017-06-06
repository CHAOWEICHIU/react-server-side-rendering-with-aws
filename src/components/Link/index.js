'use strcit'

import React    from 'react'
import { Link } from 'react-router-dom'
import styled   from 'styled-components'

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 10px 30px;
  margin:5px;
  font-size:40px;
  color:#696969;
  border: 2px solid rgb(42,184,241);
  font-weight:100;
  letter-spacing:4px;
  background-color:transparent;
  border-radius:200px;
  transition: color 0.3s;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color:#a4a4a4;
  }

  &:focus {
    text-decoration: none;
    color:white;
  }

  &:active {
    text-decoration: none;
    color:green;
  }

  &:visited {
    text-decoration: none;
    color:none;
  }
`

export default StyledLink
