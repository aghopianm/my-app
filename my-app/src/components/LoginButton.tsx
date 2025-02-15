import React from "react";
import { useDispatch } from "react-redux";
import { setLoginStreak, setLastLogin } from "../store/loginSlice";
import styled from "styled-components";

const LoginButton = ({ loginStreak }: { loginStreak: number }) => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const today = new Date();
    localStorage.setItem("loginStreak", loginStreak + 1);
    localStorage.setItem("lastLogin", today);
    dispatch(setLoginStreak(loginStreak + 1));
    dispatch(setLastLogin(today));
  };

  return (
    <StyledButton onClick={handleLogin}>Log Today's Login</StyledButton>
  );
};

// Styled-components for LoginButton
const StyledButton = styled.button`
  padding: 12px 25px;
  font-size: 16px;
  font-weight: bold;
  background-color: #4caf50; /* Green */
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease; /* Smooth transition for all properties */
  margin-top: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05); /* Elevate effect */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

export default LoginButton;
