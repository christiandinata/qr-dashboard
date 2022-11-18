import React from 'react'
import { Container, Logo, Title } from './HeaderElements'
import logo from '../../images/logo.png'

function Header() {
  return (
    <>
      <Container>
        <Logo>
          <img src={logo} alt="Bank Sinarmas" width="200" height="50"/>
        </Logo>
        <Title>
          Simas Merchant Dashboard
        </Title>
      </Container>
    </>
  )
}

export default Header