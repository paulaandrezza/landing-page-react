import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  font: {
    family:
      "'Montserrat', sans-serif",
    sizes: {
      xxsmall: '1.4rem',
      xsmall: '1.6rem',
      small: '1.8rem',
      medium: '2.2rem',
      large: '2.6rem',
      xlarge: '3.4rem',
      xxlarge: '5.2rem'
    }
  },
  colors: {
    primary: '#F231A5',
    primaryHover: '#E20E8D',
    secondary: '#3CD3C1',
    mainBg: '#030518',
    boxBg: '#FAFAFA',
    texts: '#030517',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#7B7373'
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);