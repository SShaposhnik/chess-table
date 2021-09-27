import { Reservation } from 'components';
import React from 'react';

import './ChessTable.scss';

interface Props {
  a?: 1
}

const BATH = [
  {
    name: 'Баня №1',
  },
  {
    name: 'Баня №2',
  },
  {
    name: 'Баня №3 с очень длинными названием',
  },
  {
    name: 'Баня №4',
  },
  {
    name: 'Баня №5',
  },
  {
    name: 'Баня №6',
  },
];

const ChessTable: React.FC = () => {
  console.log('ChessTable');

  return (
    <div className="chess-table">
      {
        BATH.map((bath) => (
          <Reservation
            key={bath.name}
            name={bath.name}
          />
        ))
      }
    </div>
  );
};

export default ChessTable;
