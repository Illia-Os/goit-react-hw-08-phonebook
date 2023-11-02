import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const AuthLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 22px;

  &.active {
    color: #6c5b80;
  }
`;

export const AuthMenu = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  margin-right: 30px;
`;
