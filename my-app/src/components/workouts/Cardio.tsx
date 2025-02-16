import styled from "styled-components";

const Cardio = () => {
  return (
    <Container>
      <Content>
        <Title>🏃 Cardio & Endurance</Title>
        <Subtitle>Improve heart health and stamina.</Subtitle>
        <WorkoutList>
          <WorkoutItem>🏃‍♂️ Running</WorkoutItem>
          <WorkoutItem>🚴 Cycling</WorkoutItem>
          <WorkoutItem>🛶 Rowing</WorkoutItem>
        </WorkoutList>
      </Content>
    </Container>
  );
};

export default Cardio;

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("https://source.unsplash.com/1600x900/?running,fitness") no-repeat center center/cover;
`;

const Content = styled.div`
  background: rgba(231, 76, 60, 0.85);
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

const WorkoutList = styled.ul`
  list-style: none;
  padding: 0;
`;

const WorkoutItem = styled.li`
  font-size: 18px;
  margin-top: 10px;
  font-weight: bold;
`;
