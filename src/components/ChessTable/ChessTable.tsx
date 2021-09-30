import { Reservation } from 'components';
import { useLeftIndent } from 'hooks';
import { ReservationType } from 'interfaces';
import React from 'react';

import './ChessTable.scss';

interface Props {
  list: ReservationType[]
}

const ChessTable: React.FC<Props> = ({ list }) => {
  const { relativeIndent } = useLeftIndent();

  return (
    <div className="chess-table">
      {
        list.map((bath) => (
          <Reservation
            key={bath.name}
            name={bath.name}
            slots={bath.slots}
          />
        ))
      }
    </div>
  );
};

export default ChessTable;
