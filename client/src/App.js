import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Context } from ".";
import { check } from "./hooks/userApi";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { catalog } from "./hooks/programApi";

const App = observer(() => {
  const { user } = useContext(Context);
  const { program } = useContext(Context);

  useEffect(() => {
    check()
      .then((response) => {
        user.setUserData(response.data);
        user.setIsAuth(true);
      })
      .catch(() => console.log("Empty local storage"));
    catalog()
      .then((response) => {
        if (response.data.length) {
          program.setCatalogData(response.data);
        }
      })
      .catch(() => console.log("Error catalog"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <RouterProvider router={router} />;
});

export default App;
