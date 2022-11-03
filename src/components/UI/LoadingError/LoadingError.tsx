import { ReactNode } from 'react';
import classes from './LoadingError.module.scss';

const LoadingError = ({ children }: { children: ReactNode }) => {
  return <div className={classes.message}>{children}</div>;
};

export default LoadingError;
