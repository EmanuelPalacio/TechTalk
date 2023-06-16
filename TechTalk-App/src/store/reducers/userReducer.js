import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authStatus from '../../models/authStatus';
import authService from '../../services/Firebase/authService';
import { createUserService } from '../../services/Firebase';

export const login = createAsyncThunk('user/fetchUser', async (formData) =>
  authService(formData)
);
export const register = createAsyncThunk(
  'user/registerUser',
  async (formData) => createUserService(formData)
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: authStatus.unauthorized,
    error: '',
    user: {
      fullname: '',
      email: '',
      token: '',
      userId: '',
      profileImage: '',
      emailVerified: '',
    },
  },
  reducers: {
    logIn: (state, action) => ({
      ...state,
      user: { ...action.payload },
      status: authStatus.authorized,
    }),
    logOut: (state) => ({
      ...state,
      status: authStatus.unauthorized,
      user: {},
    }),
    check: (state, action) => ({
      ...state,
      status: action.payload.status,
    }),
    resetError: (state) => ({
      ...state,
      error: null,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => ({
        ...state,
        status: authStatus.checking,
      }))
      .addCase(login.fulfilled, (state, action) => ({
        ...state,
        status: authStatus.authorized,
        user: action.payload,
      }))
      .addCase(login.rejected, (state, action) => ({
        ...state,
        status: authStatus.unauthorized,
        error: action.error.message,
      }))
      .addCase(register.pending, (state) => ({
        ...state,
        status: authStatus.checking,
      }))
      .addCase(register.fulfilled, (state) => ({
        ...state,
        status: authStatus.created,
      }))
      .addCase(register.rejected, (state, action) => ({
        ...state,
        status: authStatus.unauthorized,
        error: action.error.message,
      }));
  },
});
export default userSlice.reducer;
export const { logIn, logOut, check, resetError } = userSlice.actions;
