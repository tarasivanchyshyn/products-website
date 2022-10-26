import { ReactNode } from 'react';
import classes from './Button.module.scss';

interface ButtonProps {
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  const { className, type, children, icon, onClick } = props;

  return (
    <button
      className={`${classes.button} ${className}`}
      type={type || 'button'}
      onClick={onClick}
    >
      <span>{children}</span>
      {icon}
    </button>
  );
}

export default Button;
