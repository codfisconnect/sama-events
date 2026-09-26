import { useState, useEffect } from 'react';
import { calculateTimeRemaining, TimeRemaining } from '../utils/dateUtils';

export const useCountdown = (targetDate: string): TimeRemaining => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(() =>
    calculateTimeRemaining(targetDate)
  );

  useEffect(() => {
    // Initial update
    setTimeRemaining(calculateTimeRemaining(targetDate));

    const interval = setInterval(() => {
      const remaining = calculateTimeRemaining(targetDate);
      setTimeRemaining(remaining);

      if (remaining.isCompleted) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeRemaining;
};
