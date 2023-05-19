import { useAuth } from 'hooks/useAuth';
import styled from 'styled-components';
import img from '../img/../img/bgLoggedIn.jpg';
const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-image: ${prop => prop.bgimg};
  background-size: cover;
  background-position: center center;
`;
const WelcomeText = styled.h1`
  font-size: 40;
  border-radius: 15px;
  background-color: rgb(20, 20, 20, 0.4);
  color: aliceblue;
  padding: 20px;
`;

const HomePage = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <HomeContainer bgimg={isLoggedIn ? `url(${img})` : null}>
      <WelcomeText>
        Welcome to Phonebook{isLoggedIn ? `, ${user.name}` : null}
      </WelcomeText>
    </HomeContainer>
  );
};

export default HomePage;
