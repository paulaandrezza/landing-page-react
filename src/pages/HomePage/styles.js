import styled from "styled-components";

export const SectionContainer = styled.div`
  color: #fff;
  background: ${props => props.colorBg ? props.colorBg : "#111114"};
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
  flex-direction: column;
  align-items: center;
`

export const InfoRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.rowReverse ? 'column-reverse' : 'column'};
  align-items: center;
  justify-content: center;

  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: ${props => props.rowReverse ? 'row-reverse' : 'row'};
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
  padding-bottom: 20px;
  margin-bottom: 16px;
  text-align: ${props => props.textAlign === 'center' ? 'center' : 'left'};
`

export const TopLine = styled.p`
  color: ${props => props.dark ? '#d4af37' : '#352C13'};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  color: ${props => props.dark ? '#e1e1e6' : '#111114'};
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
  color: ${props => props.dark ? '#fff' : '#010606'};

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`

export const BtnWrap = styled.div`
  margin: 35px 0;
`