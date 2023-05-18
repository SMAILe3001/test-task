import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  width: calc((100% - 29px * 2) / 3);
`;
