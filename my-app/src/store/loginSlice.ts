import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginStreak: 0,
  lastLogin: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginStreak: (state, action) => {
      state.loginStreak = action.payload;
    },
    setLastLogin: (state, action) => {
      state.lastLogin = action.payload;
    },
  },
});

export const { setLoginStreak, setLastLogin } = loginSlice.actions;
export default loginSlice.reducer;
