import React from 'react';

import { DatePicker } from 'components';
import { useDate } from 'hooks';

import './Header.scss';
import { HoursList, CurrentDay } from './components';

const Header: React.FC = () => {
  const [date, setDate] = useDate();

  const onChange = (newValue: Date | null) => {
    if (newValue) {
      setDate(newValue);
    }
  };

  return (
    <div className="header">
      <div className="header__date-picker">
        <DatePicker value={date} onChange={onChange} />
      </div>
      <div className="header__list">
        <CurrentDay />
        <HoursList />
      </div>
    </div>
  );
};

export default Header;
