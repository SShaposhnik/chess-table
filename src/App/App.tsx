import React, { useEffect, useState } from 'react';
import { ScrollSync } from 'react-scroll-sync';

import { Modal, Header, ChessTable } from 'components';
import { MobileScreen, LoadingState, DateState } from 'context';

import 'styles';
import { BathHouseService } from 'services';
import { BathHouseResponse } from 'interfaces';
import { formatDate } from 'utils';

/**
 * Максимальная ширина экаран, после которой будет вертска для широких экранов
 */
const MAX_CLIENT_WIDTH_FOR_PHONE = 875;

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [data, setData] = useState<BathHouseResponse | null>(null);
  const [date, setDate] = useState<Date>(new Date());

  const changeAnimation = () => {
    const { documentElement: { clientWidth } } = document;

    setIsMobileScreen(clientWidth <= MAX_CLIENT_WIDTH_FOR_PHONE);
  };

  const getBathList = async () => {
    setLoading(true);

    try {
      const formattedDate = formatDate(date, 'yyyy-MM-dd');
      const list = await BathHouseService.getBathHouseList(formattedDate);

      setData(list);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    getBathList();
  }, [date]);

  useEffect(() => {
    changeAnimation();
    window.addEventListener('resize', changeAnimation);

    return () => window.removeEventListener('resize', changeAnimation);
  }, []);

  return (
    <MobileScreen.Provider value={isMobileScreen}>
      <LoadingState.Provider value={{ loading, setLoading }}>
        <DateState.Provider value={{ date, setDate }}>
          <ScrollSync horizontal>
            <>
              <Header />

              {
                !data ? 'Данные не удалось загрузить' : (
                  <ChessTable list={data.results} />
                )
              }
            </>
          </ScrollSync>

          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} maxWidth="350px">
            123
          </Modal>
        </DateState.Provider>
      </LoadingState.Provider>
    </MobileScreen.Provider>
  );
};

export default App;
