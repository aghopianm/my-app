import { Link } from "react-router-dom";
import styled from "styled-components";
import { Avatar } from "./ui/avatar";

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
      <AvatarContainer>
        <Avatar 
          src="/Rich.png"
          name="Rich Piana"
          size="md"
        />
      </AvatarContainer>
    </Nav>
  );
};

export default NavBar;
// Styled Components
const Nav = styled.nav`
  background:rgba(76, 0, 255, 0.77);
  padding: 15px;
  display: flex;
  justify-content: space-between; // Changed from center to space-between
  align-items: center; // Added to vertically center items
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  width: 100%; // Added to ensure full width
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

const AvatarContainer = styled.div`
  margin-left: auto; // Added to push avatar to the right
  padding-right: 30px; // Added more padding from the right edge
  cursor: pointer;
`;