import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }

  ul {
    list-style: none;
  }
`

export const Container = styled.div`
  color: #fff;
  background: ${({ colorBg }) => (colorBg ? colorBg : "#111114")};
  padding: ${props => props.topBotton ? props.topBotton : '50px'} 0;

  @media screen and (max-width: 768px) {
    padding ${props => props.topBotton ? props.topBotton : '50px'} 0;
  }
`

export const Flex = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 64px;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const Column = styled.div`
  flex: 1;
  margin: 100px;
`

export const Button = styled.button`
  background: ${({ primary }) => (primary ? '#00875f' : 'transparent')};
  border-radius: 5px;
  border: 1px solid ${({ primary }) => (primary ? 'transparent' : '#00875f')};
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1.2px;

  color: #FFFFFF;
  padding: 12px 24px;

  font-family: 'Montserrat', sans-serif;
  transition: .3s;
  cursor: pointer;

  &:hover {
    background: ${({ primary }) => (primary ? '#015F43' : '#00875f')};
}
`

export const LogoAncora = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const LogoImg = styled.img`
  width: ${({ width }) => (width ? width : "100px")};
`