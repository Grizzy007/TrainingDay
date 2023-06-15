import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "../..";
import AuthFormView from "../../pages/AuthFormView/AuthFormView";

const GuardRouter = observer((props) => {
  const { children } = props;

  const { user } = useContext(Context);

  const location = useLocation();
  // const navigate = useNavigate();

  const checkAccessPage = () => {
    if (!user.isAuth) {
      user.setGuardPath(location.pathname);
      return <AuthFormView />;
    }
    
    if (user.isAuth) {
      return children;
    }
  };

  return <>{checkAccessPage()}</>;
});

export default GuardRouter;