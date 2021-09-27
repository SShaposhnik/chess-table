import { IconProps } from 'interfaces';
import React from 'react';

export const iconCalendar = ({ width, height, fill }: IconProps): React.ReactNode => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={width} height={height} fill={fill}>
    <rect fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" x="48" y="80" width="416" height="384" rx="48" />
    <circle cx="296" cy="232" r="24" />
    <circle cx="376" cy="232" r="24" />
    <circle cx="296" cy="312" r="24" />
    <circle cx="376" cy="312" r="24" />
    <circle cx="136" cy="312" r="24" />
    <circle cx="216" cy="312" r="24" />
    <circle cx="136" cy="392" r="24" />
    <circle cx="216" cy="392" r="24" />
    <circle cx="296" cy="392" r="24" />
    <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" strokeLinecap="round" d="M128 48v32M384 48v32" />
    <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" d="M464 160H48" />
  </svg>
);

export const iconRightArrow = ({ width, height, fill }: IconProps): React.ReactNode => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={width} height={height} fill={fill}>
    <title>Arrow Forward</title>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M268 112l144 144-144 144M392 256H100" />
  </svg>
);

export const iconLeftArrow = ({ width, height, fill }: IconProps): React.ReactNode => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={width} height={height} fill={fill}>
    <title>Arrow Back</title>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292" />
  </svg>
);
