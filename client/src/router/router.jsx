import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import GuardRouter from '../components/GuardRouter';

// Pages
import NavigateVIew from '../pages/NavigateVIew';
import AuthFormView from '../pages/AuthFormView';
import HomeView from '../pages/HomeView';
import UserProfileView from '../pages/UserProfileView';

// Constant
import { PAGE } from '../config/config';

const router = createBrowserRouter([
  {
    element: <NavigateVIew />,
    path: PAGE.NAVIGATE.PATH,
  },
  {
    element: <HomeView />,
    path: PAGE.HOME.PATH,
  },
  {
    element: <AuthFormView />,
    path: PAGE.REGISTRATION.PATH,
  },
  {
    element: <AuthFormView />,
    path: PAGE.LOGIN.PATH,
  },
  {
    element: <GuardRouter><UserProfileView /></GuardRouter>,
    path: PAGE.USERPROFILE.PATH,
  },
]);

export default router;
