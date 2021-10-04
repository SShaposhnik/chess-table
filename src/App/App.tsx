import React, { useEffect, useState } from 'react';
import { ScrollSync } from 'react-scroll-sync';

import { Header, Reservation } from 'components';
import { PluginProps } from 'interfaces';
import {
  MobileScreen,
  LoadingState,
  DateState,
  ButtonsCallbacks,
} from 'context';

import 'styles';

/**
 * Максимальная ширина экаран, после которой будет вертска для широких экранов
 */
const MAX_CLIENT_WIDTH_FOR_PHONE = 875;

// const asd: PluginProps = {
//   data: {
//     count: 0,
//     results: [],
//   },
//   containerId: 'calendar_plugin',
//   onRightArrow: () => {
//     console.log('ПРИВЕТ');
//   }
// };

// eslint-disable-next-line react/no-unused-prop-types
const App: React.FC<PluginProps> = (props) => {
  const {
    data = null,
    onChangeDate,
    onLeftArrow,
    onRightArrow,
  } = props;

  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [date, setDate] = useState<Date>(new Date());

  const changeAnimation = () => {
    const { documentElement: { clientWidth } } = document;

    setIsMobileScreen(clientWidth <= MAX_CLIENT_WIDTH_FOR_PHONE);
  };

  const getBathList = async () => {
    if (!onChangeDate) {
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      await onChangeDate(date);
    } catch (error) {
      setHasError(true);
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

  if (hasError) {
    return (
      <div>
        Данные не удалось загрузить
      </div>
    );
  }

  return (
    <MobileScreen.Provider value={isMobileScreen}>
      <LoadingState.Provider value={{ loading, setLoading }}>
        <DateState.Provider value={{ date, setDate }}>
          <ButtonsCallbacks.Provider value={{ onLeftArrow, onRightArrow }}>
            <ScrollSync horizontal>
              <>
                <Header />

                {
                  data && (
                    <div className="chess-table">
                      {
                        data.results.map((bath) => (
                          <Reservation
                            key={bath.name}
                            name={bath.name}
                            slots={bath.slots}
                          />
                        ))
                      }
                    </div>
                  )
                }
              </>
            </ScrollSync>
          </ButtonsCallbacks.Provider>
        </DateState.Provider>
      </LoadingState.Provider>
    </MobileScreen.Provider>
  );
};

export default App;
