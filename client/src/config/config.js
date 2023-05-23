export const PAGE = {
  NAVIGATE: {
    PATH: '/',
  },
  HOME: {
    PATH: '/home',
  },
  LOGIN: {
    PATH: '/login',
  },
  REGISTRATION: {
    PATH: '/registration',
  },
  CATALOG: {
    PATH: '/catalog',
  },
  PROGRAM: {
    PATH: '/catalog/:catalogId',
  },
  USERPROFILE: {
    PATH: '/profile',
  },
};

export const BASE_URL = process.env.REACT_APP_BASE_URL;
