import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Recipes = () => {
  const loginStreak = useSelector((state: any) => state.login.loginStreak);

  return (
    <Container>
      <Content>
        <Title>Recipes</Title>
        <Subtitle>Fuel your body. Stay healthy. Enjoy your meals.</Subtitle>
        <StreakMessage>
          {loginStreak > 0 ? `🔥 Your login streak: ${loginStreak} days!` : "Start your healthy eating journey today!"}
        </StreakMessage>
        <RecipeList>
          <RecipeItem>
            <StyledLink to="/recipes/breakfast">🍳 Breakfast Recipes</StyledLink>
          </RecipeItem>
          <RecipeItem>
            <StyledLink to="/recipes/lunch">🥗 Lunch Recipes</StyledLink>
          </RecipeItem>
          <RecipeItem>
            <StyledLink to="/recipes/dinner">🍲 Dinner Recipes</StyledLink>
          </RecipeItem>
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
  background: rgba(255, 165, 0, 0.85);
  color: white;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
  max-width: 500px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
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

const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
  color: white;
`;

const StreakMessage = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: yellow;
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

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: yellow;
  }
`;
