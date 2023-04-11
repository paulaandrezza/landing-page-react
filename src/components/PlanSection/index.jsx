import React from "react";

import { Button } from '../../styles/global'
import { SectionContainer, SectionWrapper, TextWrapper, TopLine, Heading, Text, BtnWrap } from '../../pages/HomePage/styles'
import { PriceInfo, PriceInfoSpan } from './styles'

export const PlanSection = ({ colorBg, id, dark, textAlign, topLine, headLine, description, buttonLabel,}) => {
  return (
    <>
      <SectionContainer colorBg={colorBg} id={id}>
        <SectionWrapper>
          <TextWrapper textAlign={textAlign}>
            <TopLine dark={dark}>{topLine}</TopLine>
            <Heading dark={dark}>{headLine}</Heading>
            <Text dark={dark} style={{marginBottom: '50px'}}>{description}</Text>

            <Text dark={dark} style={{marginBottom: 0}}>De R$997 por 12x</Text>
            <PriceInfo>59<PriceInfoSpan>,90/mês</PriceInfoSpan></PriceInfo>
            <Text dark={dark}>OU R$ 497 À VISTA</Text>
            <BtnWrap>
              <Button primary>{buttonLabel}</Button>
            </BtnWrap>
          </TextWrapper>
        </SectionWrapper>
      </SectionContainer>
    </>
  )
}