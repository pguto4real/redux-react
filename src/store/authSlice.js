import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = true;
    },
  },
});

export const { login, logoute } = authSlice.actions;
export default authSlice.reducer;
