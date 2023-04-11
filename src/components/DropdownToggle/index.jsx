import React from "react";
import { useState } from "react";
import { SlArrowDown } from 'react-icons/sl'

import { DropdownContainer, DropdownTitle, DropdownTextTitle, DropdownIcon, DropdownContent, DropdownTextContent } from './styles'

export const DropdownToggle = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  const dropdowToggle = () => {
    setIsOpen(!isOpen)
  }
  
  console.log(isOpen)

  return (
    <>
      <DropdownContainer>
        <DropdownTitle onClick={dropdowToggle} isOpen={isOpen}>
          <DropdownTextTitle isOpen={isOpen}>{title}</DropdownTextTitle>
          <DropdownIcon isOpen={isOpen}><SlArrowDown /></DropdownIcon>
        </DropdownTitle>

        <DropdownContent isOpen={isOpen}>
          <DropdownTextContent>
            {content}
          </DropdownTextContent>
        </DropdownContent>

      </DropdownContainer>
    </>
  )
}