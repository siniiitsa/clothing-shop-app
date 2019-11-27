import React, { Fragment } from 'react';

import Header from '../Header';

const MyAccount = ({ children }) => (
  <Fragment>
    <Header />
    {children}
  </Fragment>
);

export default MyAccount;