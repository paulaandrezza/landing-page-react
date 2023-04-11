import styled from "styled-components";

export const FooterDivider = styled.div`
  width: 100%;
  border-bottom: 1px solid #A78B3C;
`

export const DownFooter = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 32px;
`

export const Anchor = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: 300;
`

export const FooterIcon = styled.div`
  color: #fff;
  width: 32px;
  font-size: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: rotate(${props => props.isOpen ? '180deg' : '0deg'});
  transition: .3s;
`
