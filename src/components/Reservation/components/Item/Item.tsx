import React, { useContext, useMemo, useState } from 'react';
import { differenceInMinutes, add, startOfDay } from 'date-fns';

import { MobileScreen } from 'context';
import { BottomSheet, ElementWithCondition, SvgIcon } from 'components';
import { maskPhone, parseDateInString, prepareSum } from 'utils';
import { Customer } from 'interfaces';

import './Item.scss';

interface Props {
  time: string
  customer: Customer

  onOpen(): void
}

const minutesPerDay = 60 * 24;
const timeSlotWidth = 161;
const oneMinuteWidth = (timeSlotWidth * 24) / minutesPerDay;

const Item: React.FC<Props> = (props) => {
  const {
    time,
    customer,
    onOpen,
  } = props;

  const isMobile = useContext(MobileScreen);
  const [start, end] = parseDateInString(time);

  const itemState = useMemo(() => {
    const difference = differenceInMinutes(end, start);
    const hours = start.getHours();
    const minutes = start.getMinutes();

    return {
      width: oneMinuteWidth * difference,
      left: oneMinuteWidth * (hours * 60 + minutes),
    };
  }, [time]);

  return (
    <div
      className="reservation-item"
      onClick={onOpen}
      style={{
        width: itemState.width,
        left: itemState.left,
      }}
    >
      <div className="reservation-item__name line-ellipsis--1">
        {customer.name}
      </div>
      <div className="reservation-item__phone line-ellipsis--1">
        {maskPhone(customer.phone)}
      </div>

      <ElementWithCondition isShow={!isMobile}>
        <div className="reservation-item__cost line-ellipsis--1">
          {prepareSum(customer.paymentSum, true)}
        </div>
        <div className="reservation-item__service line-ellipsis--1">
          {
            customer.additionalServiceItems.length > 0 ? 'Доп услуги' : ''
          }
        </div>
      </ElementWithCondition>
    </div>
  );
};

export default Item;
