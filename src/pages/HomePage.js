import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WelcomeText = styled.h1`
  font-size: 40;
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <WelcomeText>Welcome to Phonebook</WelcomeText>;
    </HomeContainer>
  );
};

export default HomePage;
