import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  children,
  className = '',
  to,
  href,
  target,
  rel,
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

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="sama-btn__icon">{icon}</span>}
      <span className="sama-btn__text">{children}</span>
      {icon && iconPosition === 'right' && <span className="sama-btn__icon">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={props.onClick as any}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel} onClick={props.onClick as any}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
