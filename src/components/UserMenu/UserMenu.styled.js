import { SignInLink } from 'components/AuthNav/AuthNav';
import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const UserGreatingStyled = styled.p``;

export const LogOutStyled = styled(SignInLink)`
  &:hover {
    color: orangered;
  }
`;
