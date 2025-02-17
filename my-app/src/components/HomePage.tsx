import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Welcome from "./Welcome";

const HomePage = () => {
  const loginStreak = useSelector((state) => state.login.loginStreak);

  return (
    <Container>
      <Content>
        <Title>Welcome to Your Fitness App!</Title>
        {loginStreak > 0 && (
          <StreakMessage>
            🔥 Your login streak: {loginStreak} days!
          </StreakMessage>
        )}
        <Welcome customStyle={{padding: '20px', backgroundColor: '#E0FFFF', color: '#fff'}}/>
        
      </Content>
    </Container>
  );
};

export default HomePage;

// Styled Components
const Container = styled.div`
  display: flex;

  justify-content: flex-start; /* Align to the left */
  align-items: flex-startr;
  background: url("https://source.unsplash.com/1600x900/?fitness,gym") no-repeat center center/cover;
  padding: 20px; /* Optional padding */
`;

const Content = styled.div`
  color: white;
  background: #87CEFA; 
  padding: 30px;
  border-radius: 10px;
  text-align: left;
  width: 100%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  font-size: 24px;
`;

const StreakMessage = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
`;