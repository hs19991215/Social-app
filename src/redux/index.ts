import {combineReducers} from '@reduxjs/toolkit';
import Auth from './reducers/authReducer';
import User from './reducers/userReducer';

export const rootReducer = combineReducers({
  auth: Auth,
  user: User,
});
