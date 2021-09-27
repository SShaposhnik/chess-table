import React, { useEffect, useState } from 'react';

import { Modal, Header, ChessTable } from 'components';
import 'styles';

/**
 * Максимальная ширина экаран, после которой будет вертска для широких экранов
 */
const MAX_CLIENT_WIDTH_FOR_PHONE = 875;

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const changeAnimation = () => {
      const { documentElement: { clientWidth } } = document;

      setIsMobileScreen(clientWidth <= MAX_CLIENT_WIDTH_FOR_PHONE);
    };

    changeAnimation();
    window.addEventListener('resize', changeAnimation);

    return () => window.removeEventListener('resize', changeAnimation);
  }, []);

  return (
    <div>
      <Header />
      {/* <button onClick={() => setIsOpen(true)} type="button">
        Click
      </button> */}

      <ChessTable />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} maxWidth="350px">
        123
      </Modal>
    </div>
  );
};

export default App;
