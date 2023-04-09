import styled from "styled-components";

export const WidgetContainer = styled.div`
  display: block;
`

export const WidgetButton = styled.a`
  position: fixed;
  z-index: 1000;
  text-align: center;
  height: 50px;
  min-width: 50px;
  border-radius: 50px;
  background-color: #25D366;
  box-shadow: 2px 2px 6px #00000040;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 32px;
  color: #fff;

  transition: .2s;

  :hover {
    opacity: 0.8;
  }
`
