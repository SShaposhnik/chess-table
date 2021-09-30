import React, { useContext, useRef, useState } from 'react';
import { ScrollSyncPane } from 'react-scroll-sync';

import { BottomSheet, ElementWithCondition, Modal } from 'components';
import { MobileScreen } from 'context';
import { createKey } from 'utils';
import { ReservationSlot } from 'interfaces';

import { Item, Info } from './components';
import './Reservation.scss';

interface Props {
  name: string
  slots: ReservationSlot[]
}

const Reservation: React.FC<Props> = (props) => {
  const {
    name,
    slots,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const listRef = useRef<HTMLDivElement | null>(null);
  const isMobie = useContext(MobileScreen);

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="reservation">
      <div className="reservation__name">
        <span className="line-ellipsis--2">
          {name}
        </span>
      </div>
      <ScrollSyncPane>
        <div className="reservation__list-container no-scrollbar" ref={listRef}>
          <div className="reservation__list-container_inner">
            {
              slots.map((slot) => {
                if (!slot.isPayed) {
                  return null;
                }

                const { customer, text } = slot;

                return (
                  <Item
                    key={createKey()}
                    customer={customer}
                    time={text}
                    onOpen={onOpen}
                  />
                );
              })
            }
          </div>
        </div>
      </ScrollSyncPane>

      <ElementWithCondition isShow={isMobie}>
        <BottomSheet
          isOpen={isOpen}
          onClose={onClose}
          snapPoints={{ min: window.innerHeight * 0.95 }}
        >
          <Info name={name} />
        </BottomSheet>
      </ElementWithCondition>
      <ElementWithCondition isShow={!isMobie}>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          // position="center-right"
          modifier="fade"
          maxWidth="300px"
        >
          <Info name={name} />
        </Modal>
      </ElementWithCondition>
    </div>
  );
};

export default Reservation;
