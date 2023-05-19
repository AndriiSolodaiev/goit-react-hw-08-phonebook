import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding: 20px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  background-color: ${prop => prop.bgColor};
  box-shadow: 0px 5px 25px teal;
`;

export const NavWrapper = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
