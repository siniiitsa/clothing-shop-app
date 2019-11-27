import React from 'react';
import { classes } from './style';

const Container = ({ children, settings }) => {
  const containerClasses = settings
    ? `${classes.container} ${settings}`
    : classes.container;

  return <div className={containerClasses}>{children}</div>;
};

export default Container;
