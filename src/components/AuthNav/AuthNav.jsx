import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SignInLink = styled(NavLink)`
  padding: 5px 20px;
  border-radius: 10px;
  background-color: #ffffff;
  font-weight: 700;
  transition: all 250ms ease;
  &:hover {
    background-color: #67c2b6;
    color: #455657;
  }
`;
const LogInLink = styled(NavLink)`
  font-weight: 700;
  margin-right: 15px;
  transition: all 250ms ease;
  &:hover {
    color: #67c2b6;
  }
`;
export const AuthNav = () => {
  return (
    <div>
      <LogInLink to="/login">Log in</LogInLink>

      <SignInLink to="/register">Sign up</SignInLink>
    </div>
  );
};
