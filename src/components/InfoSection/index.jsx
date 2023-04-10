import React from "react";

import { Button } from '../../styles/global'
import { SectionContainer, SectionWrapper, InfoRow, Column, TextWrapper, TopLine, Heading, Text, BtnWrap } from '../../pages/HomePage/styles'
import { ImgWrap, Img } from './styles'

export const InfoSection = ({ colorBg, dark, id, rowReverse, topLine, headLine, description, button, buttonLabel, img, alt }) => {
  return (
    <>
      <SectionContainer colorBg={colorBg} id={id}>
        <SectionWrapper>
          <InfoRow rowReverse={rowReverse}>
            <Column>
              <TextWrapper>
                <TopLine dark={dark}>{topLine}</TopLine>
                <Heading dark={dark}>{headLine}</Heading>
                <Text dark={dark}>{description}</Text>
                {button && (
                  <BtnWrap>
                    <Button primary>{buttonLabel}</Button>
                  </BtnWrap>
                )}
              </TextWrapper>
            </Column>
            <Column>
              <ImgWrap>
                <Img src={img} alt={alt}></Img>
              </ImgWrap>
            </Column>
          </InfoRow>
        </SectionWrapper>
      </SectionContainer>
    </>
  )
} 