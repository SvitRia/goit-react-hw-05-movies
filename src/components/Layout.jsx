import styled from 'styled-components';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(6)};
  padding: ${p => p.theme.spacing(4)};
  max-width: 1200px;
  margin: 0 auto;
`;

export const Layout = () => {
  return (
    <Container>
      <header>
        <Navigation />
      </header>

      <Outlet />

      <Toaster position="top-right" />
    </Container>
  );
};