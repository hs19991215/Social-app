import {Dispatch} from '@reduxjs/toolkit';
import {MAIN_API} from '../../common/baseUrl';
import {ENDPOINT} from '../../common/endPoints';
import {requested, setData, setUserDetailByIdData} from '../reducers/userReducer';

export const getAllUser = () => {
  return async (dispatch: Dispatch) => {
    dispatch(requested());
    try {
      const response = await fetch(MAIN_API + ENDPOINT.getAllUser, {
        method: 'GET',
        redirect: 'follow',
      });
      const result = await response.json();
      dispatch(setData(result));
    } catch (error) {
      console.error('Error:', error);
    }
  };
};


export const getUserDetailById = (payload:{
  id: string;
}) => {
  return async (dispatch: Dispatch) => {
    dispatch(requested());
    try {
      const response = await fetch(MAIN_API + ENDPOINT.getUserDetailById +`/${payload?.id}`, {
        method: 'GET',
        redirect: 'follow',
      });
      const result = await response.json();
      dispatch(setUserDetailByIdData(result));
    } catch (error) {
      console.error('Error:', error);
    }
  };
};