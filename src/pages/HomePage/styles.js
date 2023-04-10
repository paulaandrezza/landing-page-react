import styled from "styled-components";

export const SectionContainer = styled.div`
  color: #fff;
  background: ${({ colorBg }) => (colorBg ? colorBg : "#111114")};
  padding: 100px 0;

  @media screen and (max-width: 768px) {
    padding 20px 0;
  }
`


export const SectionWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding 0 24px;
  display: flex;
  justify-content: center;
`

export const InfoRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ rowReverse }) => (rowReverse ? 'column-reverse' : 'column')};
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: ${({ rowReverse }) => (rowReverse ? 'row-reverse' : 'row')};
    gap: 48px;
  }
`

export const Column = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  flex: 1;
  width: 100%;
`

export const TextWrapper = styled.div`
  max-width: 640px;
  padding-top: 0;
  padding-bottom: 60px;
  margin-bottom: 16px;
  text-align: ${({ textAlign }) => (textAlign === 'center' ? textAlign : 'left')};
`

export const TopLine = styled.p`
  color: #00875f;
  color: ${({ dark }) => (dark ? '#00875f' : '#014732')};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  color: ${({ dark }) => (dark ? '#e1e1e6' : '#111114')};
  font-size: 40px;
  line-height: 120%;
  font-weight: 600;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`

export const Text = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: ${({ dark }) => (dark ? '#fff' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`

export const BtnWrap = styled.div`
  margin: 35px 0;
`