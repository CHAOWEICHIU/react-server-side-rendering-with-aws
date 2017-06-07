import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display:flex;
  height: 500px;
  justify-content:center;
  padding:100px;
`

const ContentContainer = styled.div`
  display:flex;
  width:80%;
  height:100%;
  background-color:rgba(255, 255, 255, 0.3);
`

const ProfileContainer = () => {
  return (<StyledContainer>
    <ContentContainer>
      Hello ProfileContainer
    </ContentContainer>
  </StyledContainer>)
}

export default ProfileContainer
