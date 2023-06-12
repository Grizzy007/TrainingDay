import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "../..";
import { PAGE } from "../../config/config";

const GuardRouter = observer((props) => {
  const { children } = props;

  const { user } = useContext(Context);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isAuth) {
      user.setGuardPath(location.pathname);
      navigate(PAGE.REGISTRATION.PATH);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return <>{children}</>;
});

export default GuardRouter;