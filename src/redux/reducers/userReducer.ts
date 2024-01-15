import {createSlice} from '@reduxjs/toolkit';
import {UserStateType} from '../types';

const initialState: UserStateType = {
  data: [],
  userDetail:[],
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    requested: state => {
      state.isLoading = true;
    },
    error: (state, action) => {
      state.error = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setUserDetailByIdData:(state, action)=>{
      state.userDetail = action.payload
    }
  },
});

export default userSlice.reducer;
export const {requested, error, setData, setUserDetailByIdData} = userSlice.actions;
