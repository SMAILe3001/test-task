import styled from '@emotion/styled';

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
`;

export const Avatar = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

export const Name = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: calc(26 / 16);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: calc(26 / 16);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: rgba(0, 0, 0, 0.87);
`;

export const Link = styled.a`
  text-decoration: none;

  color: rgba(0, 0, 0, 0.87);
`;
