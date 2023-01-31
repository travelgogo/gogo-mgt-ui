import axios, { AxiosRequestConfig } from 'axios';
import CONSTANTS from 'constants/constants';
import store from 'redux/store';

let hasSignOutAction = false;

export const identityApi = axios.create({
  baseURL: _env.REACT_APP_IDENTITY_SERVER_URL,
});

export const blobApi = axios.create({
  baseURL: 'blob.com',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
  },
});
export const ax = axios;
export const baseApi = axios.create({
  baseURL: _env.API_ENPOINT,
});

baseApi.interceptors.request.use((config: AxiosRequestConfig) => ({
  ...config,
  headers: {
    Authorization: axios.defaults.headers.common['Authorization'],
    'cache-control': 'no-cache',
  },
}));

baseApi.interceptors.response.use(
  (success: any) => {
    return success;
  },
  (error) => {
    const { response } = error;
    const { dispatch, getState } = store;
    
    switch (true) {
      case response.status === 401:
      case response.status === 403:
        if (hasSignOutAction) {
          break;
        }

        hasSignOutAction = true;
        break;
    }

    throw error;
  }
);

export const baseIDPApi = axios.create({
  baseURL: _env.REACT_APP_IDENTITY_SERVER_URL,
});

baseIDPApi.interceptors.request.use((config: AxiosRequestConfig) => ({
  ...config,
  headers: {
    Authorization: `Bearer ${localStorage.getItem(CONSTANTS.ACCESS_TOKEN)}`,
  },
}));

baseIDPApi.interceptors.response.use(
  (success: any) => {
    return success;
  },
  (error) => {
    throw error;
  }
);

export const blobTheme = (baseUrl: string) =>
  axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  });
