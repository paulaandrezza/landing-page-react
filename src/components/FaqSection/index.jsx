import React from "react";

import { DropdownToggle } from "../DropdownToggle";
import { SectionContainer, SectionWrapper, TextWrapper, TopLine, Heading, Text} from '../../pages/HomePage/styles'
import { Row, Column } from './styles'


export const FaqSection = ({ colorBg, dark, id, topLine, headLine, description, questions}) => {
  return (
    <>
      <SectionContainer colorBg={colorBg} id={id}>
        <SectionWrapper>
          <Row>
            <Column>
              <TextWrapper>
                <TopLine dark={dark}>{topLine}</TopLine>
                <Heading dark={dark}>{headLine}</Heading>
                <Text dark={dark}>{description}</Text>
              </TextWrapper>
            </Column>
            <Column>

              {questions.map(question => (
                <DropdownToggle 
                  key = {question.title}
                  title = {question.title}
                  content = {question.content}
                />
              ))}

            </Column>
          </Row>
        </SectionWrapper>
      </SectionContainer>
    </>
  )
}