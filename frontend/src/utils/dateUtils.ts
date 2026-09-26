export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isCompleted: boolean;
  totalMilliseconds: number;
}

export const calculateTimeRemaining = (targetDateString: string): TimeRemaining => {
  const targetDate = new Date(targetDateString).getTime();
  const now = new Date().getTime();
  const total = targetDate - now;

  if (isNaN(targetDate) || total <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isCompleted: true,
      totalMilliseconds: 0,
    };
  }

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    days,
    hours,
    minutes,
    seconds,
    isCompleted: false,
    totalMilliseconds: total,
  };
};

export const formatDisplayDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return dateString;
  }
};
