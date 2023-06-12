import axios from 'axios';

import { BASE_URL } from '../config/config';
import { useRecoilValue } from 'recoil';
import sessionState from '../newStore/atoms/sessionAtom';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
};

export const useApi = () => {
  const session = useRecoilValue(sessionState);

  axios.interceptors.request.use((config) => {
    if (!config.headers.Authorization) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${session.jwt}`,
        },
      };
    }

    return config;
  });


  // Auth
  const register = (credentials) => axios.post('/auth/registration', credentials);
  const login = (credentials) => axios.post('/auth/login', credentials);

  // Profile
  const updateUser = (credentials) => axios.post('/profile', credentials);

  const check = () => axios.post('/check');

  return [{
    register,
    login,
    updateUser,
  }];
};

export default useApi;
