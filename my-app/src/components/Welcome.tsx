import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoginStreak, setLastLogin } from "../store/loginSlice";
import LoginButton from "./LoginButton"; // Import LoginButton
import ResetButton from "./ResetButton"; // Import ResetButton
import styled from "styled-components";

const Welcome = ({ customStyle }) => {
  const dispatch = useDispatch();
  const loginStreak = useSelector((state) => state.login.loginStreak);
  const lastLogin = useSelector((state) => state.login.lastLogin);

  useEffect(() => {
    const storedStreak = localStorage.getItem("loginStreak");
    const storedDate = localStorage.getItem("lastLogin");

    if (storedStreak && storedDate) {
      const lastLoginDate = new Date(storedDate);
      const today = new Date();

      const isConsecutive =
        lastLoginDate.getFullYear() === today.getFullYear() &&
        lastLoginDate.getMonth() === today.getMonth() &&
        lastLoginDate.getDate() === today.getDate() - 1;

      let newStreak = isConsecutive ? parseInt(storedStreak, 10) + 1 : 1;
      dispatch(setLoginStreak(newStreak));
      dispatch(setLastLogin(lastLoginDate));
    }
  }, [dispatch]);

  return (
    <Container style={customStyle}>
      <Heading>Welcome to Your Fitness Tracker</Heading>
      <Paragraph>
        Your current login streak: <strong>{loginStreak}</strong> days
      </Paragraph>
      <Paragraph>Track your daily progress below:</Paragraph>

      {/* Using LoginButton and ResetButton */}
      <LoginButton loginStreak={loginStreak} />
      <ResetButton />
    </Container>
  );
};

// Styled-components for Welcome
const Container = styled.div`
  text-align: center;
  padding: 40px 20px;
  max-width: 450px;
  margin: auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
`;

const Heading = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
`;

export default Welcome;