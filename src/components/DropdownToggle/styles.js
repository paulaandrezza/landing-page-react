import styled from "styled-components";

export const DropdownContainer = styled.div`
  width: 100%;
  margin-bottom: 24px;

  border-radius: 4px;

`

export const DropdownTitle = styled.button`
  background: #202024;
  width: 100%;
  height: 80px;
  padding 0 20px;
  border: none;
  cursor: pointer;

  border-radius: ${({ dropdowToggle }) => (dropdowToggle ? '4px 4px 0 0' : '4px')};

  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
`

export const DropdownTextTitle = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }

  font-weight: ${({ dropdowToggle }) => (dropdowToggle ? '600' : '500')}
`

export const DropdownIcon = styled.div`
  color: #fff;
  width: 32px;
  font-size: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: rotate(${({ dropdowToggle }) => (dropdowToggle ? '180deg' : '0deg')});
  transition: .3s;
`

export const DropdownContent = styled.div`
  background: #181818;
  border-radius: 0 0 4px 4px;
  width: 100%;
  height: 100%;
  padding: 16px 24px;

  
`

export const DropdownTextContent = styled.div`
  font-size: 16px;
  color: #c5c5c5;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }

`