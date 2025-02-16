import styled from "styled-components";

const Recipes = () => {
  return (
    <Container>
      <Content>
        <Title>Recipes</Title>
        <Subtitle>Fuel your body with nutritious meals.</Subtitle>
        <RecipeList>
          <RecipeItem>🥑 Avocado Toast</RecipeItem>
          <RecipeItem>🍗 Grilled Chicken Salad</RecipeItem>
          <RecipeItem>🍓 Protein Smoothie</RecipeItem>
        </RecipeList>
      </Content>
    </Container>
  );
};

export default Recipes;

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("https://source.unsplash.com/1600x900/?healthy-food") no-repeat center center/cover;
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

const RecipeList = styled.ul`
  list-style: none;
  padding: 0;
`;

const RecipeItem = styled.li`
  font-size: 18px;
  margin-top: 10px;
  font-weight: bold;
`;
