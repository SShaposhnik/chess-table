/* eslint-disable object-curly-newline */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { addDays, getDaysInMonth, startOfMonth, getHours, startOfDay } from 'date-fns';

import { formatDate } from 'utils';

import './HoursList.scss';

interface Props {
  date: Date
  setDate(date: Date): void
}

const timeSlotWidth = 161;

const HoursList: React.FC<Props> = ({ date, setDate }) => {
  const [hours, setHours] = useState<string[]>([]);
  const [currentHour, setCurrentHour] = useState<number | null>(null);

  const listRef = useRef<HTMLDivElement | null>(null);

  const getMonthDays = () => {
    const arr = [];
    const hoursInDay = 24;

    for (let i = 0; i < hoursInDay; i += 1) {
      arr.push(`${i < 10 ? `0${i}` : i}:00 - ${i + 1 < 10 ? `0${i + 1}` : i + 1}:00`);
    }

    setHours(arr);
  };

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

  const leftValue = useMemo(() => calculateLeftPropertyValue(), [currentHour]);

  const scrollToDay = () => {
    const { current } = listRef;

    if (!current) {
      return;
    }

    current.scrollTo({
      left: leftValue - 100,
    });
  };

  useEffect(() => {
    scrollToDay();
  }, [listRef, currentHour]);

  useEffect(() => {
    getMonthDays();
    hour();

    setInterval(() => {
      hour();
    }, 1000 * 60 * 10);
  }, []);

  return (
    <div className="days-list no-scrollbar" ref={listRef}>
      {
        hours.map((day) => (
          <div key={day.valueOf()} className="days-list__day">
            <div style={{ width: 120, textAlign: 'center' }}>
              {day}
            </div>
          </div>
        ))
      }

      <div
        className="days-list__timeline"
        style={{
          left: leftValue + 7,
        }}
      />
      <div
        className="days-list__circle"
        style={{
          left: leftValue,
        }}
      />
    </div>
  );
};

export default HoursList;
