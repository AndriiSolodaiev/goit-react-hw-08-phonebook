import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import styled from 'styled-components';
import img from '../img/pexels-rafael-cosquiere-2064124.jpg';
import { useAuth } from 'hooks/useAuth';

const ContainerStyled = styled.div`
  position: relative;
  padding: 0 20px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: ${prop => prop.bgimg};
  background-size: cover;
  background-position: center center;
`;

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <AppBar />
      <ContainerStyled bgimg={isLoggedIn ? '#fff' : `url(${img})`}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </ContainerStyled>
    </div>
  );
};
