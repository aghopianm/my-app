import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Workouts = () => {
  const loginStreak = useSelector((state: any) => state.login.loginStreak);

  return (
    <Container>
      <Content>
        <Title>Workouts</Title>
        <Subtitle>Push yourself. Stay consistent. Break your limits.</Subtitle>
        <StreakMessage>
          {loginStreak > 0 ? `🔥 Your login streak: ${loginStreak} days!` : "Start your fitness journey today!"}
        </StreakMessage>
        <WorkoutList>
          <WorkoutItem>
            <StyledLink to="/workouts/strength">🏋️ Strength Training</StyledLink>
          </WorkoutItem>
          <WorkoutItem>
            <StyledLink to="/workouts/cardio">🏃 Cardio & Endurance</StyledLink>
          </WorkoutItem>
          <WorkoutItem>
            <StyledLink to="/workouts/flexibility">🧘 Flexibility & Mobility</StyledLink>
          </WorkoutItem>
        </WorkoutList>
      </Content>
    </Container>
  );
};

export default Workouts;

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("https://source.unsplash.com/1600x900/?gym,workout") no-repeat center center/cover;
`;

const Content = styled.div`
  background: rgba(255, 99, 71, 0.85);
  color: white;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
  max-width: 500px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;

const WorkoutList = styled.ul`
  list-style: none;
  padding: 0;
`;

const WorkoutItem = styled.li`
  font-size: 18px;
  margin-top: 10px;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: yellow;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
  text-decoration: none; /* Ensure no underline */
  color: white;
`;

const StreakMessage = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: yellow;
  margin-bottom: 20px;
  text-decoration: none; /* Ensure no underline */
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 15px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;
