import { useAuth } from 'hooks/useAuth';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WelcomeText = styled.h1`
  font-size: 40;
  background-color: rgb(20, 20, 20, 0.4);
  color: aliceblue;
  padding: 20px;
`;

const HomePage = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <HomeContainer>
      <WelcomeText>
        Welcome to Phonebook, {isLoggedIn ? user.name : null}
      </WelcomeText>
    </HomeContainer>
  );
};

export default HomePage;
