import React from "react";
import { useDispatch } from "react-redux";
import { setLoginStreak, setLastLogin } from "../store/loginSlice";
import styled from "styled-components";

const ResetButton = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    localStorage.removeItem("loginStreak");
    localStorage.removeItem("lastLogin");
    dispatch(setLoginStreak(0));
    dispatch(setLastLogin(null));
  };

  return (
    <StyledResetButton onClick={handleReset}>Reset Streak</StyledResetButton>
  );
};

// Styled-components for ResetButton
const StyledResetButton = styled.button`
  padding: 12px 25px;
  font-size: 16px;
  font-weight: bold;
  background-color: #ff5722; /* Red */
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 15px;
  margin-left: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05); /* Elevate effect */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

export default ResetButton;
