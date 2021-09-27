import React, { useEffect, useState } from 'react';

import { formatDate } from 'utils';

import './Header.scss';
import { HoursList, CurrentDay, DatePicker } from './components';

const Header: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="header">
      <div className="header__list">
        <CurrentDay date={selectedDate} setDate={setSelectedDate} />
        <HoursList date={selectedDate} setDate={setSelectedDate} />
      </div>
    </div>
  );
};

export default Header;
