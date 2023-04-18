import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding: 20px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  background-color: rgba(24, 24, 24, 0.1);
`;

export const NavWrapper = styled.header`
  max-width: 1440px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
