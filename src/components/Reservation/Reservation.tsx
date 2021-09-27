/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

import { BottomSheet } from 'components';

import './Reservation.scss';

interface Props {
  name: string
}

const ReservationItem: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="reservation-item" onClick={() => setIsOpen(true)}>
        <div className="reservation-item__name">
          Sergey Shaposhnik
        </div>
        <div className="reservation-item__phone">
          +7 (999) 441 31-23
        </div>
        <div className="reservation-item__cost">
          2500 ₽
        </div>
        <div className="reservation-item__service">
          Доп услуги
        </div>
      </div>

      <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="reservation-item__name">
          Sergey Shaposhnik
        </div>
        <div className="reservation-item__phone">
          +7 (999) 441 31-23
        </div>
        <div className="reservation-item__cost">
          2500 ₽
        </div>
        <div className="reservation-item__cost">
          Доп услуги
        </div>
      </BottomSheet>
    </>
  );
};

const Reservation: React.FC<Props> = (props) => {
  const {
    name,
  } = props;

  return (
    <div className="reservation">
      <div className="reservation__name">
        <span className="line-ellipsis--2">
          {name}
        </span>
      </div>
      <div className="reservation__list">
        <ReservationItem />
      </div>
    </div>
  );
};

export default Reservation;
