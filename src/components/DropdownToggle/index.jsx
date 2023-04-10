import React from "react";
import { useState } from "react";
import { SlArrowDown } from 'react-icons/sl'

import { DropdownContainer, DropdownTitle, DropdownTextTitle, DropdownIcon, DropdownContent, DropdownTextContent } from './styles'

export const DropdownToggle = ({ title, content }) => {

  const [isOpen, setIsOpen] = useState(false)

  const dropdowToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <DropdownContainer>
        <DropdownTitle onClick={dropdowToggle} dropdowToggle={isOpen}>
          <DropdownTextTitle dropdowToggle={isOpen}>{title}</DropdownTextTitle>
          <DropdownIcon dropdowToggle={isOpen}><SlArrowDown /></DropdownIcon>
        </DropdownTitle>
        {isOpen && (
          <DropdownContent>
            <DropdownTextContent>
              {content}
            </DropdownTextContent>
          </DropdownContent>
        )}
      </DropdownContainer>
    </>
  )
}