import { configureStore } from '@reduxjs/toolkit';
import { tutorsReducer } from './tutorsSlice';
import { facultiesReducer } from './facultiesSlice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    authSlice: authReducer,
    tutorsSlice: tutorsReducer,
    facultiesSlice: facultiesReducer,
  },
});
