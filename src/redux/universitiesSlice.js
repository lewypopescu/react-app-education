import { createSlice } from '@reduxjs/toolkit';

import {
  fetchUniversities,
  addUniversity,
  updateUniversity,
  deleteUniversity,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const universitiesSlice = createSlice({
  name: 'universities',
  initialState: { items: [], isLoading: false, error: null },
  reducers: {
    addTagToUniversity: (state, action) => {
      const { universityId, tag } = action.payload;
      const university = state.items.find(
        university => university.id === universityId
      );
      if (university) {
        if (!university.tags) {
          university.tags = [];
        }
        university.tags.push(tag);
      }
    },
    removeTagFromUniversity: (state, action) => {
      const { universityId, tagIndex } = action.payload;
      const university = state.items.find(
        university => university.id === universityId
      );
      if (university && university.tags) {
        university.tags.splice(tagIndex, 1);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUniversities.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchUniversities.pending, handlePending)
      .addCase(fetchUniversities.rejected, handleRejected)
      .addCase(addUniversity.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addUniversity.pending, handlePending)
      .addCase(addUniversity.rejected, handleRejected)
      .addCase(updateUniversity.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          university => university.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
          state.isLoading = false;
          state.error = null;
        }
      })
      .addCase(updateUniversity.pending, handlePending)
      .addCase(updateUniversity.rejected, handleRejected)
      .addCase(deleteUniversity.fulfilled, (state, action) => {
        state.items = state.items.filter(
          university => university.id !== action.payload.id
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteUniversity.pending, handlePending)
      .addCase(deleteUniversity.rejected, handleRejected);
  },
});

export const { addTagToUniversity, removeTagFromUniversity } =
  universitiesSlice.actions;

export const universitiesReducer = universitiesSlice.reducer;
