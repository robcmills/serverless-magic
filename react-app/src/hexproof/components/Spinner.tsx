import React from 'react';
import { createUseStyles } from 'react-jss';
import cn from 'classnames';

import { BORDER, SPACING_UNIT } from 'hexproof/styles/constants';

const DOT_SIZE_PERCENTAGE = 0.18;
const MEDIUM_SPINNER_SIZE = SPACING_UNIT * 6;
const SMALL_SPINNER_SIZE = MEDIUM_SPINNER_SIZE / 2;
const LARGE_SPINNER_SIZE = MEDIUM_SPINNER_SIZE * 2;
const sizes = {
  small: SMALL_SPINNER_SIZE,
  medium: MEDIUM_SPINNER_SIZE,
  large: LARGE_SPINNER_SIZE,
};

const useStyles = createUseStyles({
  spinner: {
    position: 'relative',
    animation: '$rotation 5s infinite linear',
  },
  '@keyframes rotation': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(359deg)' },
  },
  transform: {
    height: '100%',
    position: 'absolute',
    transformOrigin: '50% 50%',
    width: '100%',
  },
  dot: {
    border: BORDER,
    borderRadius: '50%',
    boxSizing: 'border-box',
    position: 'absolute',
  },
  transformWhite: { transform: 'rotate(0deg)' },
  transformBlue: { transform: 'rotate(72deg)' },
  transformBlack: { transform: 'rotate(144deg)' },
  transformGreen: { transform: 'rotate(-72deg)' },
  transformRed: { transform: 'rotate(-144deg)' },
  white: { backgroundColor: 'white' },
  blue: { backgroundColor: 'blue' },
  black: { backgroundColor: 'black' },
  green: { backgroundColor: 'green' },
  red: { backgroundColor: 'red' },
  svg: {
    opacity: 0,
  },
});

interface P {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export function Spinner({ className, size = 'medium' }: P) {
  const s = useStyles();

  const sizeValue = sizes[size];

  const spinnerStyle = {
    height: sizeValue,
    width: sizeValue,
  };

  const dotStyle = {
    left: sizeValue * (0.5 - DOT_SIZE_PERCENTAGE / 2),
    height: sizeValue * DOT_SIZE_PERCENTAGE,
    width: sizeValue * DOT_SIZE_PERCENTAGE,
  };

  return (
    <div className={cn(s.spinner, className)} style={spinnerStyle}>

      <div className={cn(s.transform, s.transformWhite)}>
        <div className={cn(s.white, s.dot)} style={dotStyle} />
      </div>

      <div className={cn(s.transform, s.transformBlue)}>
        <div className={cn(s.blue, s.dot)} style={dotStyle} />
      </div>

      <div className={cn(s.transform, s.transformBlack)}>
        <div className={cn(s.black, s.dot)} style={dotStyle} />
      </div>

      <div className={cn(s.transform, s.transformGreen)}>
        <div className={cn(s.green, s.dot)} style={dotStyle} />
      </div>

      <div className={cn(s.transform, s.transformRed)}>
        <div className={cn(s.red, s.dot)} style={dotStyle} />
      </div>

    </div>
  );
}