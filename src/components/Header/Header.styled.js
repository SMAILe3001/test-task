import styled from '@emotion/styled';

export const HeaderStyle = styled.header`
  background-color: white;
`;

export const ElementPosition = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 480px) {
    width: 480px;
  }

  @media (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1024px) {
    width: 1024px;
    padding-left: 60px;
    padding-right: 60px;
  }

  @media (min-width: 1170px) {
    width: 1170px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const ButtonPosition = styled.div`
  display: flex;
  gap: 10px;
`;
