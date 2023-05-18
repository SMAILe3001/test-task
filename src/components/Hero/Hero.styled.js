import styled from '@emotion/styled';
import backgroundDesctop from '../../img/background_1024.jpg';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1024px;
  padding-top: 164px;
  padding-bottom: 164px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${() => {
      return backgroundDesctop;
    }});
`;

export const HeroTitle = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;

  color: #ffffff;

  margin-bottom: 21px;
`;

export const HeroText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;

  color: #ffffff;

  margin-bottom: 32px;
`;

export const HeroContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 380px;
  text-align: center;
`;
