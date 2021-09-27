import React from 'react';
import { IconProps } from 'interfaces';
import * as icons from './icons';

export const AvalibleIcons = {
  iconCalendar: 'iconCalendar',
  iconLeftArrow: 'iconLeftArrow',
  iconRightArrow: 'iconRightArrow',
};

interface Props extends IconProps {
  name: keyof typeof AvalibleIcons
}

const SvgIcons: React.FC<Props> = (props) => {
  const {
    name,
    ...other
  } = props;

  const IconComponent = icons[name];

  return (
    <>
      {IconComponent(other)}
    </>
  );
};

export default React.memo(SvgIcons);
