import styled from "styled-components";

const Lunch = () => {
  return (
    <Container>
      <Title>Lunch Recipes</Title>
      <Recipe>🥗 Grilled Chicken Salad</Recipe>
      <Recipe>🌯 Quinoa & Black Bean Wrap</Recipe>
      <Recipe>🍛 Brown Rice & Stir-Fried Veggies</Recipe>
    </Container>
  );
};

export default Lunch;

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #82e0aa;
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
