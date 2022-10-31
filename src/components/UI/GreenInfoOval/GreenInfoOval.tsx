import { ReactNode } from 'react';
import classes from './GreenInfoOval.module.scss';

interface GreenInfoOvalProps {
  className?: string;
  children: ReactNode;
}

const GreenInfoOval = ({ className, children }: GreenInfoOvalProps) => {
  return (
    <div className={`${classes.oval} ${className}`}>
      <span>{children}</span>
    </div>
  );
};

export default GreenInfoOval;
