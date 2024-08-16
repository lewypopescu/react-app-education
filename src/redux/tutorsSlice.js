import { createSlice } from '@reduxjs/toolkit';
import { fetchTutors, addTutor, deleteTutor } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tutorsSlice = createSlice({
  name: 'tutors',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchTutors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTutors.pending, handlePending)
      .addCase(fetchTutors.rejected, handleRejected)
      .addCase(addTutor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTutor.pending, handlePending)
      .addCase(addTutor.rejected, handleRejected)
      .addCase(deleteTutor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          tutor => tutor.id !== action.payload.id
        );
      })
      .addCase(deleteTutor.pending, handlePending)
      .addCase(deleteTutor.rejected, handleRejected);
  },
});

export const tutorsReducer = tutorsSlice.reducer;
