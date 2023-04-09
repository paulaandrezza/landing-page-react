import React from "react";

import { Button } from '../../styles/global'
import { SectionContainer, SectionWrapper, TextWrapper, TopLine, Heading, Text, BtnWrap } from '../../pages/HomePage/styles'
import { InfoRow, Column1, Column2, ImgWrap, Img } from './styles'

export const InfoSection = ({ colorBg, dark, id, imgStart, topLine, headLine, description, button, buttonLabel, img, alt }) => {
  return (
    <>
      <SectionContainer colorBg={colorBg} id={id}>
        <SectionWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
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
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}></Img>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </SectionWrapper>
      </SectionContainer>
    </>
  )
} 