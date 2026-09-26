import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  children,
  className = '',
  ...props
}) => {
  const classes = [
    'sama-btn',
    `sama-btn--${variant}`,
    `sama-btn--${size}`,
    fullWidth ? 'sama-btn--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} {...props}>
      {icon && iconPosition === 'left' && <span className="sama-btn__icon">{icon}</span>}
      <span className="sama-btn__text">{children}</span>
      {icon && iconPosition === 'right' && <span className="sama-btn__icon">{icon}</span>}
    </button>
  );
};

export default Button;
