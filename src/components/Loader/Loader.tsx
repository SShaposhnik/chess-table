import React from 'react';
import { CircularProgress } from '@mui/material';

import { COLORS } from 'constant';

import './Loader.scss';

interface ILoaderProps {
  size?: number
  color?: CSSStyleDeclaration['backgroundColor']
}

const Loader: React.FC<ILoaderProps> = (props) => {
  const {
    size = 50,
    color = COLORS.GREEN,
  } = props;

  return (
    <div className="loader-container">
      <CircularProgress
        className="loader-container__bottom"
        variant="determinate"
        size={size}
        thickness={4}
        value={100}
      />
      <CircularProgress
        className="loader-container__top"
        variant="indeterminate"
        size={size}
        thickness={4}
        style={{ color }}
      />
    </div>
  );
};

export default Loader;
