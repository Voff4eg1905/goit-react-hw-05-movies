import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MovieLink = styled(Link)`
  font-size: 16px;
  padding-left: 10px;
  color: black;
  &:hover {
    color: orange;
  }
`;
