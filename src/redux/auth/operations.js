import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

import {
  currentUser,
  login,
  logout,
  signup,
  setAuthHeader,
} from '../../api/authAPI';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      return await signup(credentials);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error('Invalid email address or email already in use');
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      return await login(credentials);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error('Incorrect email or password');
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    return await logout();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

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
