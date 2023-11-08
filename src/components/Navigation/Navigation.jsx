import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Nav } from './Navigation.styled';

const Link = styled(NavLink)`
  &.active {
    color: pink;
  }
`;

export const Navigation = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </Nav>
  );
};