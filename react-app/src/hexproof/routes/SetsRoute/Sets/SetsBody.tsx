import React from 'react';
import { createUseStyles } from 'react-jss';

import { SetsGrid } from './SetsGrid';

import { SPACING_UNIT } from 'hexproof/styles/constants';

const useStyles = createUseStyles({
  body: {
    display: 'grid',
    padding: SPACING_UNIT,
  },
});

export function SetsBody() {
  const s = useStyles();

  return (
    <div className={s.body}>
      <SetsGrid />
    </div>
  );
}
