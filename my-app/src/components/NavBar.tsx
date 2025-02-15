import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/workouts">Workouts</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/recipes">Recipes</StyledLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default NavBar;

// Styled Components
const Nav = styled.nav`
  background: #007bff;
  padding: 15px;
  display: flex;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const NavItem = styled.li`
  display: inline;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    color: #ffdd57;
  }
`;
