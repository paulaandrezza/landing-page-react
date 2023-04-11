import React from "react";
import LogoCompleta from '../../assets/logo-completa.svg'
import { SlArrowUp } from 'react-icons/sl'

import { Button, LogoAncora, LogoImg } from '../../styles/global'
import { SectionContainer, SectionWrapper, TextWrapper, InfoRow, TopLine, Heading, Text, BtnWrap } from '../../pages/HomePage/styles'
import { FooterDivider, DownFooter, Anchor, FooterIcon } from "./styles";

export const FooterSection = ( {id, colorBg, dark, textAlign, topLine, headLine, description, buttonLabel }) => {
  return (
    <>
      <SectionContainer colorBg={colorBg} id={id} style={{padding: '0'}}>
        <SectionWrapper>
          <TextWrapper textAlign={textAlign}>
            <LogoAncora href="#" style={{margin: '24px'}}>
              <LogoImg src={LogoCompleta} alt="Logo" width="100px"/>
            </LogoAncora>
            <Heading dark={dark}>{headLine}</Heading>
            <Text dark={dark} style={{marginBottom: '50px'}}>{description}</Text>
            <InfoRow>
              <Button>{buttonLabel}</Button>
              <Button primary>{buttonLabel}</Button>
            </InfoRow>
          </TextWrapper>
          <FooterDivider />
          <DownFooter>
            <Anchor href="#">Políticas de privacidade</Anchor>
            <Anchor href="#"><FooterIcon><SlArrowUp /></FooterIcon></Anchor>
          </DownFooter>
        </SectionWrapper>
      </SectionContainer>
    </>
  )
}