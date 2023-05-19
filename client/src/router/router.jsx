import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Pages
import NavigateVIew from '../pages/NavigateVIew/NavigateVIew';
import HomeView from '../pages/HomeView/HomeView';

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
]);

export default router;
