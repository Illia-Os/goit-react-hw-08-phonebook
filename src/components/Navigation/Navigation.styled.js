import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 24px;

  &.active {
    color: #6c5b80;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 30px;
  align-items: center;
  margin-left: 30px;
`;
