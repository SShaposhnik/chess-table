import React, { useEffect, useState } from 'react';
import { ScrollSyncPane } from 'react-scroll-sync';

import './HoursList.scss';

const HoursList: React.FC = () => {
  const [hours, setHours] = useState<string[]>([]);

  const getMonthDays = () => {
    const arr = [];
    const hoursInDay = 24;

    for (let i = 0; i < hoursInDay; i += 1) {
      arr.push(`${i < 10 ? `0${i}` : i}:00 - ${i + 1 < 10 ? `0${i + 1}` : i + 1}:00`);
    }

    setHours(arr);
  };

  useEffect(() => {
    getMonthDays();
  }, []);

  return (
    <ScrollSyncPane>
      <div className="days-list no-scrollbar">
        {
          hours.map((day) => (
            <div key={day.valueOf()} className="days-list__day">
              <div style={{ width: 120, textAlign: 'center' }}>
                {day}
              </div>
            </div>
          ))
        }
      </div>
    </ScrollSyncPane>
  );
};

export default HoursList;
