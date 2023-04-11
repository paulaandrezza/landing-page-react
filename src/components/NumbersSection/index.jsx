import React from "react";

import { TextWrapper, Element, Heading, Divider } from "./styles";
import { SectionContainer, SectionWrapper, Text } from "../../pages/HomePage/styles";

export const NumbersSection = ({ colorBg, dark, id, numbers }) => {
  return (
    <>
      <SectionContainer colorBg={colorBg} id={id}>
        <SectionWrapper>
          <TextWrapper>

            {numbers.map(info => (
              <Element key = {info.value}>
                <Heading dark={dark}>{info.value}</Heading>
                <Divider />
                <Text dark={dark}>{info.content}</Text>
              </Element>
            ))}

          </TextWrapper>
        </SectionWrapper>
      </SectionContainer>
    </>
  )
}