import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const instance = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

export const setAuthHeader = token => {
  if (token) {
    instance.defaults.headers.common.authorization = `Bearer ${token}`;
    localStorage.setItem('authToken', token);
  }
};

export const clearAuthHeader = () => {
  instance.defaults.headers.common.authorization = '';
  localStorage.removeItem('authToken');
};

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      clearAuthHeader();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const signup = async credentials => {
  const { data } = await instance.post('/users/signup', credentials);
  setAuthHeader(data.token);
  return data;
};

export const login = async credentials => {
  const { data } = await instance.post('/users/login', credentials);
  setAuthHeader(data.token);
  return data;
};

export const logout = async () => {
  await instance.post('/users/logout');
  clearAuthHeader();
};

export const currentUser = async persistedToken => {
  setAuthHeader(persistedToken);
  const { data } = await instance.get('/users/current');
  return data;
};

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    let token = state.auth.token;

    if (!token) {
      token = localStorage.getItem('authToken');
    }

    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(token);
      return await currentUser(token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
