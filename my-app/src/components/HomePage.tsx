import styled from "styled-components";
import { useSelector } from "react-redux";
import Welcome from "./Welcome";

const HomePage = () => {
  const loginStreak = useSelector((state) => state.login.loginStreak);

  return (
    <Container>
      <Content>
        <Title>Welcome to Your Fitness Tracker</Title>
        <Subtitle>Stay consistent. Keep pushing. Track your progress.</Subtitle>
        <Welcome />
        <StreakMessage>
          {loginStreak > 0 ? `🔥 Streak: ${loginStreak} days! Keep it up!` : "Start tracking your streak today!"}
        </StreakMessage>
      </Content>
    </Container>
  );
};

export default HomePage;

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("https://source.unsplash.com/1600x900/?fitness,gym") no-repeat center center/cover;
`;

const Content = styled.div`
  background: linear-gradient(135deg, rgba(0, 123, 255, 0.85), rgba(0, 180, 219, 0.85));
  color: white;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
  max-width: 500px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const StreakMessage = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
`;
