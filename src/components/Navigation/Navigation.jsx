import { useAuth } from 'hooks/useAuth';
import { ContactsLink, HomeLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <HomeLink to="/">Home </HomeLink>
      {isLoggedIn && <ContactsLink to="contacts">Contacts</ContactsLink>}
    </div>
  );
};
