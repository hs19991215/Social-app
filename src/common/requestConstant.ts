import {https} from './axiosConstant';

export const postApiCallWithHeaders = (
  endPoint: string,
  params: object,
  headers: object,
) => {
  https.post(endPoint, params, headers).catch(error => {
    console.log(error);
  });
};

export const getApiCallWithHeaders = (endPoint: string, headers: object) => {
  https.get(endPoint, headers).catch(error => {
    console.log(error);
  });
};

export const getApiCall = (endPoint: string) => {
  https.get(endPoint, {}).catch(error => {
    console.log(error);
    const {status, data} = error.response;
  });
};

//   export const getApiCall = (endPoint: string) =>
//   https.get(endPoint, {}).catch(error => {
//   });
