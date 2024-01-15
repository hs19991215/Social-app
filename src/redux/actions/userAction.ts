import {Dispatch} from '@reduxjs/toolkit';
import {MAIN_API} from '../../common/baseUrl';
import {ENDPOINT} from '../../common/endPoints';
import {requested, setData} from '../reducers/userReducer';

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
