import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice"; // Import your login reducer

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
