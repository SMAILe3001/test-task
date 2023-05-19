import styled from '@emotion/styled';
import backgroundDesctop from '../../img/background_1024.jpg';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  min-width: 328px;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 71px;

  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${() => {
      return backgroundDesctop;
    }});

  @media (min-width: 480px) {
    width: 480px;
  }

  @media (min-width: 768px) {
    width: 768px;
    padding-top: 89px;
    padding-bottom: 89px;
  }

  @media (min-width: 1024px) {
    width: 1024px;
    padding-top: 164px;
    padding-bottom: 164px;
  }

  @media (min-width: 1170px) {
    width: 1170px;
  }
`;

export const HeroContent = styled.div`
  text-align: center;
  padding: 0px 15px;

  @media (min-width: 480px) {
    width: 480px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const HeroTitle = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;

  color: #ffffff;
  margin-bottom: 21px;
`;

export const HeroText = styled.p`
  font-size: 16px;
  line-height: 26px;

  color: #ffffff;
  margin-bottom: 32px;
`;
