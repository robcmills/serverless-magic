import React from 'react';
import { createUseStyles } from 'react-jss';
import cn from 'classnames';

import { BORDER, SPACING_UNIT } from 'hexproof/styles/constants';

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

  return (
    <div className={cn(s.spinner, className)} style={spinnerStyle}>

      <svg viewBox="0 0 16 16">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="mana-dots-export">
            <g id="green" transform="translate(0.310000, 4.480000)">
              <circle fill="#42AE3E" cx="1.51351351" cy="1.51351351" r="1.44144144" />
              <path fill="#808080" d="M1.51351351,0 C0.677623081,0 0,0.677623081 0,1.51351351 C0,2.34940395 0.677623081,3.02702703 1.51351351,3.02702703 C2.34940395,3.02702703 3.02702703,2.34940395 3.02702703,1.51351351 C3.02702703,0.677623081 2.34940395,0 1.51351351,0 Z M1.51351351,0.144144144 C2.26979533,0.144144144 2.88288288,0.757231694 2.88288288,1.51351351 C2.88288288,2.26979533 2.26979533,2.88288288 1.51351351,2.88288288 C0.757231694,2.88288288 0.144144144,2.26979533 0.144144144,1.51351351 C0.144144144,0.757231694 0.757231694,0.144144144 1.51351351,0.144144144 Z" />
            </g>
            <g id="red" transform="translate(2.674529, 11.737119)">
              <circle fill="#E13829" cx="1.51351351" cy="1.51351351" r="1.44144144" />
              <path fill="#808080" d="M1.51351351,0 C0.677623081,0 0,0.677623081 0,1.51351351 C0,2.34940395 0.677623081,3.02702703 1.51351351,3.02702703 C2.34940395,3.02702703 3.02702703,2.34940395 3.02702703,1.51351351 C3.02702703,0.677623081 2.34940395,0 1.51351351,0 Z M1.51351351,0.144144144 C2.26979533,0.144144144 2.88288288,0.757231694 2.88288288,1.51351351 C2.88288288,2.26979533 2.26979533,2.88288288 1.51351351,2.88288288 C0.757231694,2.88288288 0.144144144,2.26979533 0.144144144,1.51351351 C0.144144144,0.757231694 0.757231694,0.144144144 1.51351351,0.144144144 Z" />
            </g>
            <g id="blue" transform="translate(12.656953, 4.477648)">
              <circle fill="#099AD9" cx="1.51351351" cy="1.51351351" r="1.44144144" />
              <path fill="#808080" d="M1.51351351,0 C0.677623081,0 0,0.677623081 0,1.51351351 C0,2.34940395 0.677623081,3.02702703 1.51351351,3.02702703 C2.34940395,3.02702703 3.02702703,2.34940395 3.02702703,1.51351351 C3.02702703,0.677623081 2.34940395,0 1.51351351,0 Z M1.51351351,0.144144144 C2.26979533,0.144144144 2.88288288,0.757231694 2.88288288,1.51351351 C2.88288288,2.26979533 2.26979533,2.88288288 1.51351351,2.88288288 C0.757231694,2.88288288 0.144144144,2.26979533 0.144144144,1.51351351 C0.144144144,0.757231694 0.757231694,0.144144144 1.51351351,0.144144144 Z" />
            </g>
            <g id="black" transform="translate(10.301441, 11.735000)">
              <circle fill="#000000" cx="1.51351351" cy="1.51351351" r="1.44144144" />
              <path fill="#808080" d="M1.51351351,0 C0.677623081,0 0,0.677623081 0,1.51351351 C0,2.34940395 0.677623081,3.02702703 1.51351351,3.02702703 C2.34940395,3.02702703 3.02702703,2.34940395 3.02702703,1.51351351 C3.02702703,0.677623081 2.34940395,0 1.51351351,0 Z M1.51351351,0.144144144 C2.26979533,0.144144144 2.88288288,0.757231694 2.88288288,1.51351351 C2.88288288,2.26979533 2.26979533,2.88288288 1.51351351,2.88288288 C0.757231694,2.88288288 0.144144144,2.26979533 0.144144144,1.51351351 C0.144144144,0.757231694 0.757231694,0.144144144 1.51351351,0.144144144 Z" />
            </g>
            <g id="white" transform="translate(6.490000, 0.000000)">
              <circle fill="#FFFFFF" cx="1.51351351" cy="1.51351351" r="1.44144144" />
              <path fill="#808080" d="M1.51351351,0 C0.677623081,0 0,0.677623081 0,1.51351351 C0,2.34940395 0.677623081,3.02702703 1.51351351,3.02702703 C2.34940395,3.02702703 3.02702703,2.34940395 3.02702703,1.51351351 C3.02702703,0.677623081 2.34940395,0 1.51351351,0 Z M1.51351351,0.144144144 C2.26979533,0.144144144 2.88288288,0.757231694 2.88288288,1.51351351 C2.88288288,2.26979533 2.26979533,2.88288288 1.51351351,2.88288288 C0.757231694,2.88288288 0.144144144,2.26979533 0.144144144,1.51351351 C0.144144144,0.757231694 0.757231694,0.144144144 1.51351351,0.144144144 Z" />
            </g>
          </g>
        </g>
      </svg>


    </div>
  );
}