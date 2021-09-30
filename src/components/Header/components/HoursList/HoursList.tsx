import React, { useEffect, useRef, useState } from 'react';
import { ScrollSyncPane } from 'react-scroll-sync';

import { useLeftIndent } from 'hooks';

import './HoursList.scss';

const HoursList: React.FC = () => {
  const [hours, setHours] = useState<string[]>([]);

  const listRef = useRef<HTMLDivElement | null>(null);
  const { absoluteIndent } = useLeftIndent();

  const getMonthDays = () => {
    const arr = [];
    const hoursInDay = 24;

    for (let i = 0; i < hoursInDay; i += 1) {
      arr.push(`${i < 10 ? `0${i}` : i}:00 - ${i + 1 < 10 ? `0${i + 1}` : i + 1}:00`);
    }

    setHours(arr);
  };

  const scrollToDay = () => {
    const { current } = listRef;

    if (!current) {
      return;
    }

    current.scrollTo({
      left: absoluteIndent - 100,
    });
  };

  useEffect(() => {
    scrollToDay();
  }, [listRef, absoluteIndent]);

  useEffect(() => {
    getMonthDays();
  }, []);

  return (
    <ScrollSyncPane>
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
          className="days-list__circle"
          style={{
            left: absoluteIndent,
          }}
        />
        <div
          className="days-list__timeline"
          style={{
            left: absoluteIndent + 7,
          }}
        />
      </div>
    </ScrollSyncPane>
  );
};

export default HoursList;
