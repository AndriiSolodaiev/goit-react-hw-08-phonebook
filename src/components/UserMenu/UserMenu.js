import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { LogOutStyled, UserMenuWrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const username = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <UserMenuWrapper>
      <p> Welcome, {username.name} </p>
      <LogOutStyled type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogOutStyled>
    </UserMenuWrapper>
  );
};
