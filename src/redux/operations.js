import { createAsyncThunk } from '@reduxjs/toolkit';

import { tutorsApi, universitiesApi } from '../api/api';

export const fetchTutors = createAsyncThunk(
  'tutors/fetchTutors',
  async (_, thunkApi) => {
    try {
      const response = await tutorsApi.getAll();
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addTutor = createAsyncThunk(
  'tutors/addTutor',
  async (tutor, thunkApi) => {
    try {
      const response = await tutorsApi.create({ ...tutor, id: 6 });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteTutor = createAsyncThunk(
  'tutors/deleteTutor',
  async (tutorId, thunkApi) => {
    try {
      await tutorsApi.delete(tutorId);
      return { id: tutorId };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchUniversities = createAsyncThunk(
  'universities/fetchUniversities',
  async (_, thunkApi) => {
    try {
      const response = await universitiesApi.getAll();
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addUniversity = createAsyncThunk(
  'universities/addUniversity',
  async (university, thunkApi) => {
    try {
      const response = await universitiesApi.create(university);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateUniversity = createAsyncThunk(
  'universities/updateUniversity',
  async (university, thunkApi) => {
    try {
      const response = await universitiesApi.update(university.id, university);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteUniversity = createAsyncThunk(
  'universities/deleteUniversity',
  async (universityId, thunkApi) => {
    try {
      await universitiesApi.delete(universityId);
      return { id: universityId };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
