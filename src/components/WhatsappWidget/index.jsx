import React from "react";
import { FaWhatsapp } from "react-icons/fa"

import { WidgetButton, WidgetContainer } from "./styles";

export const WhatsappWidget = () => {
  return (
    <>
      <WidgetContainer>
        <WidgetButton href="https://www.google.com/" target="_blank">
          <FaWhatsapp />
        </WidgetButton>
      </WidgetContainer>
    </>
  )
}