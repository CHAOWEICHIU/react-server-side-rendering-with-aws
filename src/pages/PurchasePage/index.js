import React            from 'react'
import styled           from 'styled-components'
import Calendar         from '../../components/Calendar'
const PurchasePageContainer = styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100vw;
    flex-direction: column;
  }
`
const MessageContainer = styled.div`
  width: 30vw;
  height: 30vw;
  background-color: gray;

  @media (max-width: 768px) {
    width: 100vw;
  }
`


const PurchasePage = () => (
  <PurchasePageContainer>
    <Calendar maxWidth={700} />
    <MessageContainer />
  </PurchasePageContainer>
)

export default PurchasePage
