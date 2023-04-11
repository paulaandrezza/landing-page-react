import styled from "styled-components";

export const TextWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const Element = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 260px;
  margin-bottom: 24px;
`
export const Heading = styled.h1`
  color: #d4af37;
  font-size: 40px;
  line-height: 120%;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 3px;
  margin-top: 24px;
  margin-bottom: 24px;
  background-image: linear-gradient(90deg, #d4af37, #6b5717);
`