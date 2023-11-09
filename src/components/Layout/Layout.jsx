import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { Header } from './Layout.styled';
import {  Suspense } from 'react';

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
    <div>
      <Header>
        <Navigation />
      </Header>
 <Suspense fallback={<div>Loading...</div>}> 
      <Outlet />
      </Suspense>  
    </div>
  );
};