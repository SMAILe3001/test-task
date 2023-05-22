import styled from '@emotion/styled';

export const ButtonStyle = styled.button`
  font-size: 16px;
  line-height: calc(26 / 16);

  min-width: 100px;
  padding: 4px 19px;
  background-color: #f4e041;
  border-radius: 80px;

  border: none;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #00bdd3;
  }

  &:disabled {
    background-color: #b4b4b4;
    color: rgba(255, 255, 255, 0.87);
  }
`;
