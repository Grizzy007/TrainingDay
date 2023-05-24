import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Context } from '../..';
import { PAGE } from '../../config/config';


const GuardRouter = observer((props) => {
  const { children } = props;

  const { user } = useContext(Context);

  const navigate = useNavigate();

  return (
    <>
      {user.isAuth ? children : navigate(PAGE.REGISTRATION.PATH)}
    </>
  );
});

export default GuardRouter;
