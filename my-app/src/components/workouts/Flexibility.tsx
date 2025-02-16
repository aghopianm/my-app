import styled from "styled-components";

const Flexibility = () => {
  return (
    <Container>
      <Content>
        <Title>🧘 Flexibility & Mobility</Title>
        <Subtitle>Increase range of motion and prevent injuries.</Subtitle>
        <WorkoutList>
          <WorkoutItem>🧘 Yoga</WorkoutItem>
          <WorkoutItem>🤸 Dynamic Stretching</WorkoutItem>
          <WorkoutItem>🦵 Foam Rolling</WorkoutItem>
        </WorkoutList>
      </Content>
    </Container>
  );
};

export default Flexibility;

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("https://source.unsplash.com/1600x900/?yoga,stretching") no-repeat center center/cover;
`;

const Content = styled.div`
  background: rgba(46, 204, 113, 0.85);
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
