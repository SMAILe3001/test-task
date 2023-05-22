import styled from '@emotion/styled';

export const SectionStyle = styled.section`
  padding-top: 140px;
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  min-width: 348px;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 480px) {
    width: 480px;
  }

  @media (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1170px) {
    width: 1170px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 40px;
  line-height: calc(40 / 40);

  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 50px;
`;
