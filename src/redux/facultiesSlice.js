import { createSlice } from '@reduxjs/toolkit';
import {
  fetchFaculties,
  addFaculty,
  updateFaculty,
  deleteFaculty,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const facultiesSlice = createSlice({
  name: 'faculties',
  initialState: { items: [], isLoading: false, error: null },
  reducers: {
    addTagToFaculty: (state, action) => {
      const { facultyId, tag } = action.payload;
      const faculty = state.items.find(faculty => faculty.id === facultyId);
      if (faculty) {
        if (!faculty.tags) {
          faculty.tags = [];
        }
        faculty.tags.push(tag);
      }
    },
    removeTagFromFaculty: (state, action) => {
      const { facultyId, tagIndex } = action.payload;
      const faculty = state.items.find(faculty => faculty.id === facultyId);
      if (faculty && faculty.tags) {
        faculty.tags.splice(tagIndex, 1);
      }
    },
  },
  extraReducers: builder => {
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
          faculty => faculty.id === action.payload.id
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
          faculty => faculty.id !== action.payload.id
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteFaculty.pending, handlePending)
      .addCase(deleteFaculty.rejected, handleRejected);
  },
});

export const { addTagToFaculty, removeTagFromFaculty } = facultiesSlice.actions;

export const facultiesReducer = facultiesSlice.reducer;
