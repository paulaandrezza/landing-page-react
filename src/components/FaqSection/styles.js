import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 48px;
  }
`

export const Column = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  flex: 1;
  width: 100%;

  @media screen and (min-width: 768px) {
    position: sticky;    
  }

  top: 100px;
`