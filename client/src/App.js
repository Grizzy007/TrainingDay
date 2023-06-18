import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Context } from ".";
import { check } from "./hooks/userApi";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

const App = observer(() => {
  const { user } = useContext(Context);

  useEffect(() => {
    check()
      .then((data) => {
        user.setUserData(data);
        user.setIsAuth(true);
      })
      .catch(() => console.log('Empty local storage'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <RouterProvider router={router} />;
});

export default App;
