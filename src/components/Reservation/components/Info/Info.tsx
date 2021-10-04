import React, { useContext } from 'react';
import cx from 'classnames';

import { COLORS } from 'constant';
import { MobileScreen } from 'context';
import { formatDate } from 'utils';

import './Info.scss';

interface Props {
  name: string
}

interface BlockProps {
  title: string
  text: string
}

const Block: React.FC<BlockProps> = ({ title, text }) => (
  <div className="info__block">
    <div className="info__block_title">
      {title}
    </div>
    <div className="info__block_text">
      {text}
    </div>
  </div>
);

const Info: React.FC<Props> = () => {
  const isMobile = useContext(MobileScreen);

  return (
    <div
      className={cx(
        'info', {
          'info--mobile': isMobile,
        },
      )}
    >
      <Block text="Sergey Shaposhnik" title="Имя клиента:" />
      <Block text="+7 (999) 999 99-99" title="Номер телефона:" />
      <Block text={formatDate(new Date())} title="Дата заказа:" />
      <Block text="ОПЛАЧЕНО" title="Статус:" />

      <div className="info__block_title">
        Дополнительные услуги (2202.42 ₽)
      </div>
      <div className="info__additional">
        <div className="info__additional_name">
          Веник
          <span style={{ color: COLORS.GREY_DARK }}>
            {' '}
            x 5
          </span>
        </div>
        <div className="info__additional_name">
          Молоток
          <span style={{ color: COLORS.GREY_DARK }}>
            {' '}
            x 5
          </span>
        </div>
        <div className="info__additional_name">
          Ручка
          <span style={{ color: COLORS.GREY_DARK }}>
            {' '}
            x 5
          </span>
        </div>
        <div className="info__additional_name">
          Печка
          <span style={{ color: COLORS.GREY_DARK }}>
            {' '}
            x 5
          </span>
        </div>
      </div>
    </div>
  );
};

export default Info;
