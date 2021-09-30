import { useEffect, useMemo, useState } from 'react';
import { getHours } from 'date-fns';

import { formatDate } from 'utils';

const timeSlotWidth = 161;

const useLeftIndent = (): { absoluteIndent: number, relativeIndent: number } => {
  const [currentHour, setCurrentHour] = useState<number | null>(null);

  const hour = () => {
    const current = getHours(new Date());

    setCurrentHour(current);
  };

  const calculateLeftPropertyValue = () => {
    if (!currentHour) {
      return 0;
    }

    const hourStr = formatDate(Date.now(), 'HH');
    const hourNum = parseInt(hourStr, 10);

    const minutesStr = formatDate(Date.now(), 'mm');
    const minutesNum = parseInt(minutesStr, 10);

    const hoursIndent = timeSlotWidth * hourNum;
    const minutesIndent = (timeSlotWidth / 60) * minutesNum;

    return hoursIndent + minutesIndent;
  };

  const leftValueRelative = useMemo(() => {
    if (!currentHour) {
      return 0;
    }

    const percent = 2350.6 / 3874;

    return (window.innerWidth - 40) * 0.8 * percent;
  }, [currentHour]);

  const leftValueAbsolute = useMemo(() => calculateLeftPropertyValue(), [currentHour]);

  useEffect(() => {
    hour();

    setInterval(() => {
      hour();
    }, 1000 * 60 * 10);
  }, []);

  return {
    absoluteIndent: leftValueAbsolute,
    relativeIndent: leftValueRelative,
  };
};

export default useLeftIndent;
