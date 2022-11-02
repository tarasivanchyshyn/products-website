import { ReactNode } from 'react';
import classes from './Button.module.scss';

interface ButtonProps {
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  children: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { className, type, children, icon, disabled, onClick } = props;

  return (
    <button
      className={`${classes.button} ${className}`}
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
      {icon}
    </button>
  );
};

export default Button;
