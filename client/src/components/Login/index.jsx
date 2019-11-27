import React, { Fragment } from 'react';

import Header from '../Header';
import LoginMenu from "./LoginMenu";

const Login = ({ children }) => (
  <Fragment>
    <Header />
    <LoginMenu />
    {children}
  </Fragment>
);

export default Login;