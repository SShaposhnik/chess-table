import React from 'react';
import { IconButton } from '@mui/material';

import { SvgIcon } from 'components';
import { formatDate } from 'utils';

import './CurrentDay.scss';

interface Props {
  date: Date

  setDate(date: Date): void
}

const CurrentDay: React.FC<Props> = ({ date, setDate }) => {
  const getCurrentDay = () => (
    formatDate(date, 'dd MMMM yyyy')
  );

  const getCurrentWeekDay = () => (
    formatDate(date, 'EEEE')
  );

  return (
    <div className="current-day">
      <div className="current-day__arrow">
        <IconButton>
          <SvgIcon name="iconLeftArrow" width={30} height={30} />
        </IconButton>
      </div>
      <div className="current-day__current">
        <span className="line-ellipsis--1">
          {getCurrentDay()}
        </span>

        <div className="mini-description tac">
          {getCurrentWeekDay()}
        </div>
      </div>
      <div className="current-day__arrow">
        <IconButton>
          <SvgIcon name="iconRightArrow" width={30} height={30} />
        </IconButton>
      </div>
    </div>
  );
};

export default React.memo(CurrentDay);
