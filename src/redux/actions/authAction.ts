import {Dispatch} from '@reduxjs/toolkit';
import {MAIN_API} from '../../common/baseUrl';
import {ENDPOINT} from '../../common/endPoints';
import {requested, setUserData} from '../reducers/authReducer'; // Assuming you have these action creators
import {headers} from '../../common/axiosConstant';
import {ScreenName} from '../../common/commonText';

export const signUp = (payload: Object, navigation: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(requested());

    try {
      const data = {
        name: payload?.name,
        email: payload?.email,
        password: payload?.password,
      };
      fetch(MAIN_API + ENDPOINT.addUser, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
      })
        .then(response => response?.json())
        .then(result => {
          if (result?.status === 201) {
            navigation.navigate(ScreenName.LOGIN);
            console.log('Success:', result);
          } else {
            console.log('error');
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } catch (error) {
      console.log('first', error);
    }
  };
};

export const login = (payload: Object, navigation: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(requested());

    try {
      const data = {
        email: payload?.email,
        password: payload?.password,
      };
      fetch(MAIN_API + ENDPOINT.login, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
      })
        .then(response => response?.json())
        .then(result => {
          dispatch(setUserData(result));
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } catch (error) {
      console.log('first', error);
    }
  };
};
