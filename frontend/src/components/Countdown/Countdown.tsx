import React from 'react';
import { useCountdown } from '../../hooks/useCountdown';
import './Countdown.css';

export interface CountdownProps {
  targetDate: string; // YYYY-MM-DD or ISO string
  eventTitle?: string;
  theme?: 'gold' | 'dark' | 'glass';
  className?: string;
}

export const Countdown: React.FC<CountdownProps> = ({
  targetDate,
  eventTitle = 'Noor-E-Ramzan 2.0',
  theme = 'glass',
  className = '',
}) => {
  const { days, hours, minutes, seconds, isCompleted } = useCountdown(targetDate);

  if (isCompleted) {
    return (
      <div className={`countdown countdown--completed countdown--${theme} ${className}`}>
        <div className="countdown__completed-pill">
          <span className="countdown__dot"></span>
          <span>Event Commenced / Completed</span>
        </div>
      </div>
    );
  }

  const timeBlocks = [
    { value: days, label: 'Days' },
    { value: hours, label: 'Hours' },
    { value: minutes, label: 'Minutes' },
    { value: seconds, label: 'Seconds' },
  ];

  return (
    <div className={`countdown countdown--${theme} ${className}`}>
      <div className="countdown__header">
        <span className="countdown__label">Grand Festival Commences In</span>
      </div>
      <div className="countdown__grid">
        {timeBlocks.map((block, index) => (
          <div key={block.label} className="countdown__item">
            <div className="countdown__box">
              <span className="countdown__number">
                {String(block.value).padStart(2, '0')}
              </span>
            </div>
            <span className="countdown__unit">{block.label}</span>
            {index < timeBlocks.length - 1 && (
              <span className="countdown__separator">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
