import {createSlice} from '@reduxjs/toolkit';
import {AuthStateType} from '../types';
import {RootState} from '@reduxjs/toolkit/query';

const initialState: AuthStateType = {
  data: [],
  user: null,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    requested: state => {
      state.isLoading = true;
    },
    error: (state, action) => {
      state.error = action.payload;
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    setSignUpData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default authSlice.reducer;
export const {requested, error, setUserData, setSignUpData} = authSlice.actions;
export const authSelector = (state: RootState) => state.Auth;
