import React from 'react';
import './SectionHeading.css';

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  return (
    <div className={`section-heading section-heading--${align} section-heading--${theme} ${className}`}>
      {badge && <span className="section-heading__badge">{badge}</span>}
      <h2 className="section-heading__title font-serif">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
      <div className="section-heading__accent-line" />
    </div>
  );
};

export default SectionHeading;
