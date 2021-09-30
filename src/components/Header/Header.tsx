import React from 'react';

import './Header.scss';
import { HoursList, CurrentDay } from './components';

const Header: React.FC = () => (
  <div className="header">
    <div className="header__list">
      <CurrentDay />
      <HoursList />
    </div>
  </div>
);

export default Header;
