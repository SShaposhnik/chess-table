import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import { addDays, subDays } from 'date-fns';

import { SvgIcon, Loader } from 'components';
import { formatDate } from 'utils';
import { useDate, useLoading } from 'hooks';
import { ButtonsCallbacks } from 'context';

import './CurrentDay.scss';

const CurrentDay: React.FC = () => {
  const [loading] = useLoading();
  const [date, setDate] = useDate();
  const {
    onRightArrow,
    onLeftArrow,
  } = useContext(ButtonsCallbacks);

  const getCurrentDay = () => (
    formatDate(date, 'dd MMMM yyyy')
  );

  const getCurrentWeekDay = () => (
    formatDate(date, 'EEEE')
  );

  const addDay = () => {
    const newDate = addDays(date, 1);

    setDate(newDate);

    if (onRightArrow) {
      onRightArrow(newDate);
    }
  };

  const substractDay = () => {
    const newDay = subDays(date, 1);

    setDate(newDay);

    if (onLeftArrow) {
      onLeftArrow(newDay);
    }
  };

  return (
    <div className="current-day">
      <div className="current-day__arrow">
        <IconButton onClick={substractDay} disabled={loading}>
          <SvgIcon name="iconLeftArrow" width={30} height={30} />
        </IconButton>
      </div>
      <div className="current-day__current">
        {
          loading ? (
            <div className="df aic jcc">
              <Loader size={25} />
            </div>
          ) : (
            <>
              <span className="line-ellipsis--1">
                {getCurrentDay()}
              </span>

              <div className="mini-description tac">
                {getCurrentWeekDay()}
              </div>
            </>
          )
        }
      </div>
      <div className="current-day__arrow">
        <IconButton onClick={addDay} disabled={loading}>
          <SvgIcon name="iconRightArrow" width={30} height={30} />
        </IconButton>
      </div>
    </div>
  );
};

export default CurrentDay;
