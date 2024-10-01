import { configureStore } from '@reduxjs/toolkit';

import { tutorsReducer } from './tutorsSlice';
import { universitiesReducer } from './universitiesSlice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    authSlice: authReducer,
    tutorsSlice: tutorsReducer,
    universitiesSlice: universitiesReducer,
  },
});
