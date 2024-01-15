import axios, {AxiosInstance} from 'axios';
import {MAIN_API} from './baseUrl';

export const https: AxiosInstance = axios.create({
  baseURL: MAIN_API,
  timeout: 30000,
  headers: {
    'content-type': 'application/json',
  },
});

export const headers = {
  'Content-Type': 'application/json',
};
