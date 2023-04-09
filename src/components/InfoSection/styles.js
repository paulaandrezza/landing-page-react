import styled from "styled-components";

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2';
  }
`

export const Column1 = styled.div`
  grid-area: col1;
  margin-bottom: 15px;
  padding: 0 15px;
`

export const Column2 = styled.div`
  grid-area: col2;
  margin-bottom: 15px;
  padding: 0 15px;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  margin: 0 16px;
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`