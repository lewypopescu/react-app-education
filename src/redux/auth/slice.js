import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.pending, handlePending)
      .addCase(login.rejected, handleRejected)
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logout.pending, handlePending)
      .addCase(logout.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
