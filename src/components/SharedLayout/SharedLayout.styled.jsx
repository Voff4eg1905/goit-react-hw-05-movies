import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  padding: 15px 10px;
  margin: 0 auto;
`;

export const Header = styled.header`
  border-bottom: 1px solid black;
  box-shadow: 0px 2px 6px grey;
`;
export const NavStyledLink = styled(NavLink)`
  padding: 20px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 16px;
  &:first-child {
    margin-right: 8px;
  }
  &:hover {
    color: orange;
  }
  &.active {
    color: orange;
  }
`;
