import { configureStore } from "@reduxjs/toolkit";
import { tutorsReducer } from "./tutorsSlice";

export const store = configureStore({
  reducer: {
    tutorsSlice: tutorsReducer,
    // universitySlice: universityReducer
  },
});
