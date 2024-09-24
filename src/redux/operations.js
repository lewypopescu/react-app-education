import { createAsyncThunk } from "@reduxjs/toolkit";
import { tutorsApi, facultiesApi } from "../api/api";

export const fetchTutors = createAsyncThunk(
  "tutors/fetchTutors",
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
  "tutors/addTutor",
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
  "tutors/deleteTutor",
  async (tutorId, thunkApi) => {
    try {
      await tutorsApi.delete(tutorId);
      return { id: tutorId };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchFaculties = createAsyncThunk(
  "faculties/fetchFaculties",
  async (_, thunkApi) => {
    try {
      const response = await facultiesApi.getAll();
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addFaculty = createAsyncThunk(
  "faculties/addFaculty",
  async (faculty, thunkApi) => {
    try {
      const response = await facultiesApi.create(faculty);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateFaculty = createAsyncThunk(
  "faculties/updateFaculty",
  async (faculty, thunkApi) => {
    try {
      const response = await facultiesApi.update(faculty.id, faculty);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteFaculty = createAsyncThunk(
  "faculties/deleteFaculty",
  async (facultyId, thunkApi) => {
    try {
      await facultiesApi.delete(facultyId);
      return { id: facultyId };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
