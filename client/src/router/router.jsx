import React from "react";
import { createBrowserRouter } from "react-router-dom";

import GuardRouter from "../components/GuardRouter";

// Pages
import NavigateVIew from "../pages/NavigateVIew";
import AuthFormView from "../pages/AuthFormView";
import HomeView from "../pages/HomeView";
import UserProfileView from "../pages/UserProfileView";
import SuggestNewProgramView from "../pages/SuggestNewProgramView";

// Constant
import { PAGE } from "../config/config";
import CatalogView from "../pages/CatalogView/CatalogView";
import CardView from "../pages/CardView/CardView";

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
    element: <CatalogView />,
    path: PAGE.CATALOG.PATH,
  },
  {
    element: (
      <GuardRouter>
        <UserProfileView />
      </GuardRouter>
    ),
    path: PAGE.USERPROFILE.PATH,
  },
  {
    element: (
      <GuardRouter>
        <SuggestNewProgramView />
      </GuardRouter>
    ),
    path: PAGE.SUGGEST_NEW_PROGRAM.PATH,
  },
  {
    element: (
      <GuardRouter>
        <CardView />
      </GuardRouter>
    ),
    path: PAGE.PROGRAM.PATH,
  },
]);

export default router;
