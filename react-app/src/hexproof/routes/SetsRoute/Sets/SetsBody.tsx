import React from 'react';
import { createUseStyles } from 'react-jss';

import { SetsGrid } from './SetsGrid';
import { SetsSearch } from './SetsSearch';

import { SPACING_UNIT } from 'hexproof/styles/constants';

const useStyles = createUseStyles({
  body: {
    display: 'grid',
    gridGap: SPACING_UNIT,
    gridTemplateRows: 'auto 1fr',
    padding: SPACING_UNIT,
  },
});

export function SetsBody() {
  const s = useStyles();

  return (
    <div className={s.body}>
      <SetsSearch />
      <div>
        <SetsGrid />
      </div>
    </div>
  );
}
