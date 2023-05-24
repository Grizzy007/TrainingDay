import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "../..";
import { PAGE } from "../../config/config";

const GuardRouter = observer((props) => {
  const { children } = props;

  const { user } = useContext(Context);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isAuth) {
      navigate(PAGE.REGISTRATION.PATH);
    }

    
  }, [navigate, user.isAuth]);

  return <>{children}</>;
});

export default GuardRouter;