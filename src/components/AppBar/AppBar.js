import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { HeaderStyled, NavWrapper } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderStyled
      bgColor={isLoggedIn ? 'rgba(250,250,250,0.5)' : ' rgba(24, 24, 24, 0.1)'}
    >
      <NavWrapper>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </NavWrapper>
    </HeaderStyled>
  );
};
