import styled from "styled-components";

const Dinner = () => {
  return (
    <Container>
      <Title>Dinner Recipes</Title>
      <Recipe>🍲 Grilled Salmon & Roasted Veggies</Recipe>
      <Recipe>🥦 Stir-fried Tofu & Broccoli</Recipe>
      <Recipe>🍜 Whole Wheat Pasta with Pesto</Recipe>
    </Container>
  );
};

export default Dinner;

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #3498db;
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
