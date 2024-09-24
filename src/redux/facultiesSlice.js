import { createSlice } from "@reduxjs/toolkit";
import {
  fetchFaculties,
  addFaculty,
  updateFaculty,
  deleteFaculty,
} from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const facultiesSlice = createSlice({
  name: "faculties",
  initialState: { items: [], isLoading: false, error: null },
  // initialState: {
  //   contacts: {
  //     items: [],
  //     isLoading: false,
  //     error: null,
  //   },
  //   filter: '',
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaculties.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchFaculties.pending, handlePending)
      .addCase(fetchFaculties.rejected, handleRejected)
      .addCase(addFaculty.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addFaculty.pending, handlePending)
      .addCase(addFaculty.rejected, handleRejected)
      .addCase(updateFaculty.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (faculty) => faculty.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
          state.isLoading = false;
          state.error = null;
        }
      })
      .addCase(updateFaculty.pending, handlePending)
      .addCase(updateFaculty.rejected, handleRejected)
      .addCase(deleteFaculty.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (faculty) => faculty.id !== action.payload.id
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteFaculty.pending, handlePending)
      .addCase(deleteFaculty.rejected, handleRejected);
  },
});

export const facultiesReducer = facultiesSlice.reducer;
