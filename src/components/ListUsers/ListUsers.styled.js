import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
  padding: 0;
  list-style: none;
  @media (min-width: 768px) {
    gap: 16px;
    margin-bottom: 50px;
  }
`;

export const Item = styled.li`
  width: 100%;
  @media (min-width: 768px) {
    width: calc((100% - 16px * 1) / 2);
  }
  @media (min-width: 1024px) {
    width: calc((100% - 29px * 2) / 3);
  }
`;
