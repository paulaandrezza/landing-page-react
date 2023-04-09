import React from 'react'
import LogoCompleta from '../../assets/logo-completa.svg'

import { Container, LogoAncora, LogoImg, Button } from '../../styles/global'
import { HeaderWrapper, NavbarContainer } from './styles'

export const Header = () => {
  return (
    <Container topBotton="20px">
      <HeaderWrapper >
        <NavbarContainer>
          <LogoAncora href="#">
            <LogoImg src={LogoCompleta} alt="Logo" width="80px"/>
          </LogoAncora>
          <Button>Assinar Agora</Button>
        </NavbarContainer>
      </HeaderWrapper>
    </Container>
  )
}
