import styled from "styled-components";

const Breakfast = () => {
  return (
    <Container>
      <Title>Breakfast Recipes</Title>
      <Recipe>🥑 Avocado Toast with Poached Eggs</Recipe>
      <Recipe>🍓 Greek Yogurt & Berries</Recipe>
      <Recipe>🥣 Oatmeal with Almond Butter</Recipe>
    </Container>
  );
};

export default Breakfast;

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #f8c471;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Recipe = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 10px 0;
`;
